import random


#
# WORK IN PROGRESS!!
#

class CommunicationServer:
    def __init__(self):
        self.data = []

    def _bidimensional_server_matrix(self):
        random_lines_len = random.randint(2, 8)
        for i in range(0, random_lines_len):
            row = [random.randint(0, 1) for j in range(0, random_lines_len)]
            self.data.append(row)

    def communication_count(self):
        self._bidimensional_server_matrix()
        count = 0
        found_connections = []
        rows_with_no_connection = []
        for index, row in enumerate(self.data):
            sorted_row = sorted(row)
            print(sorted_row)
            for col_index in range(len(sorted_row) - 1):
                iteration = 0
                if (
                    sorted_row[col_index] == sorted_row[col_index + 1]
                    and sorted_row[col_index] == 1
                ):
                    found_connections.extend(
                        [(index, col_index), (index, col_index + 1)]
                    )
                    if iteration == 0:
                        iteration += 2
                    else:
                        iteration += 1
                if iteration > 1:
                    count += iteration

if __name__ == "__main__":
    communications = CommunicationServer()
    communications.communication_count()
    print(communications.data)
