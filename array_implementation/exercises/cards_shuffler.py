
import numpy as np
from monitor_app import NumpyArray
import random
import math


class CardShuffler(NumpyArray):
    def __init__(self):
        self.data = np.array([], dtype="U")

    def _random_cardhand_generator(self):
        cards = [
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
        ]
        for i in range(0, random.randint(1, 10)):
            self.data = np.append(self.data, random.choice(cards))

    def shuffle_cards_by_cut_in_2(self):
        self._random_cardhand_generator()
        half = len(self.data) // 2
        print("mão: ", self.data)
        first_half = self.data[0:half]
        second_half = self.data[half:len(self.data)]
        print("first half: ", first_half, "second half: ", second_half)
        shuffled_hand = []
        for index, card in enumerate(range(math.ceil(len(self.data) / 2))):
            try:
                shuffled_hand.append(first_half[index])
            except IndexError:
                pass
            try:
                shuffled_hand.append(second_half[index])
            except IndexError:
                pass
            finally:
                pass
        print("mão embaralhada: ", shuffled_hand)
        return(shuffled_hand)


if __name__ == "__main__":
    card_shuffler = CardShuffler()
    card_shuffler.shuffle_cards_by_cut_in_2()
