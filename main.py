def tic_tac_toe(gameboard):
    if len(gameboard) == 0:
        return "invalid input"
    else:
        # row wise check
        row = len(gameboard)
        col = len(gameboard[0])
        for i in range(row):
            temp = set(gameboard[i])
            if len(temp) == 1:
                return f"{list(temp)[0]} is winner"

        # column wise check
        # right diagonal
        """
        00 11 22 

        """
        # left diagonal
        """
        02 11 20

        """


print(
    tic_tac_toe(
        [
            ["O", "O", "O"],  # {O}
            ["X", "X", "O"],  # {X,O}
            ["O", "X", "X"],  # {O,X}
        ]
    )
)
