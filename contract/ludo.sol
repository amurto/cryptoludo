pragma solidity >=0.5.0 <0.7.0;

contract Ludo {
    address public manager;
    uint256 public playersLength;
    uint256[4] private startPoints = [0, 13, 26, 39];
    bool public isGame = false;

    uint256[] private safePos = [
        1,
        9,
        14,
        22,
        27,
        35,
        40,
        48,
        1001,
        1002,
        1003,
        1004,
        1005,
        2001,
        2002,
        2003,
        2004,
        2005,
        3001,
        3002,
        3003,
        3004,
        3005,
        4001,
        4002,
        4003,
        4004,
        4005
    ];
    mapping(uint256 => uint256) public safeMap;

    constructor(uint256 _playersLength) public {
        manager = msg.sender;
        playersLength = _playersLength;
        isGame = true;
        for (uint256 i = 0; i < safePos.length; i++) {
            safeMap[safePos[i]] = 1;
        }
    }

    modifier onlyManager() {
        // Modifier
        require(msg.sender == manager, "Only manager can call this.");
        _;
    }

    function random() public view returns (uint256) {
        return
            (uint256(
                keccak256(
                    abi.encodePacked(
                        block.difficulty,
                        block.number,
                        block.timestamp
                    )
                )
            ) % uint256(6)) + uint256(1);
    }

    function moveDeducer(uint256 val, uint256 diceThrow)
        private
        view
        onlyManager
        returns (uint256, bool, bool)
    {
        uint256 newVal;
        bool isThrown = false;
        bool isChance = false;
        if (val == 0 && diceThrow == 6) {
            newVal = 1;
        } else if (val == 0) {
            newVal = 0;
            isChance = true;
            isThrown = true;
        } else {
            uint256 testVal = val + diceThrow;
            if (testVal > 57) {
                newVal = val;
                isChance = true;
            } else if (testVal == 57) {
                newVal = testVal;
                isChance = true;
            } else {
                newVal = testVal;
            }
        }
        return (newVal, isChance, isThrown);
    }

    function BoardToPos(uint256[16] memory arr)
        private
        view
        onlyManager
        returns (uint256[16] memory)
    {
        uint256[16] memory newArr;
        for (uint256 i = 0; i < playersLength * 4; i++) {
            uint256 color = i / 4;
            if (arr[i] > 52) {
                newArr[i] = 51 + (arr[i] % 1000);
            } else if (arr[i] == 0) {
                newArr[i] = 0;
            } else {
                if (arr[i] < startPoints[color] + 1) {
                    newArr[i] = 52 + arr[i] - startPoints[color];
                } else {
                    newArr[i] = arr[i] - startPoints[color];
                }
            }
        }
        return newArr;
    }

    function PosToBoard(uint256[16] memory arr)
        private
        view
        onlyManager
        returns (uint256[16] memory)
    {
        uint256[16] memory newArr;
        for (uint256 i = 0; i < playersLength * 4; i++) {
            uint256 color = i / 4;
            if (arr[i] > 52) {
                newArr[i] = (color + 1) * 1000 + (arr[i] % 50) - 1;
            } else if (arr[i] == 0) {
                newArr[i] = 0;
            } else {
                if ((startPoints[color] + arr[i]) % 52 == 0) {
                    newArr[i] = 52;
                } else {
                    newArr[i] = (startPoints[color] + arr[i]) % 52;
                }
            }
        }
        return newArr;
    }

    function moveMarker(
        uint256[16] memory game,
        uint256 color,
        uint256 j,
        uint256 diceThrow
    ) public view onlyManager returns (uint256[16] memory, bool, bool) {
        require(isGame == true, "Game has not started.");
        uint256[16] memory currentGame = game;
        currentGame = BoardToPos(currentGame);
        uint256 val = currentGame[j];
        (uint256 newVal, bool isChance, bool isThrown) = moveDeducer(
            val,
            diceThrow
        );
        currentGame[j] = newVal;
        currentGame = PosToBoard(currentGame);
        val = currentGame[j];
        if (safeMap[val] != 1) {
            for (uint256 i = 0; i < playersLength * 4; i++) {
                if (color != i / 4 && currentGame[i] == val) {
                    isChance = true;
                    currentGame[i] = 0;
                }
            }
        }
        if (diceThrow == 6) {
            isChance = true;
        }
        return (currentGame, isChance, isThrown);
    }
}
