class Food:
    def __init__(self, name, price, mozzarella):
        self.name = name
        self.price = price
        self.mozzarella = mozzarella
    def money(self):
        return f"Price {self.price}"
    def prepare(self):
        return f"Prepare {self.name}"
    def __str__(self):
        return f"Food(name={self.name}, price=${self.price:.2f}, Mozzarella for taste={self.mozzarella})"

class Sandwitch(Food):
    def __init__(self, name, price, mozzarella, meet, breed):
        super().__init__(name, price, mozzarella)
        self.meet = meet
        self.breed = breed

    def prepare(self):
        preparetion = super().prepare()
        return f"{preparetion} Slice some {self.breed} and some no many {self.breed}"
    def money(self):
        return f"{super().money()} but if you student you have a bust"
    def __str__(self):
        return f"{super().__str__()} And how many meet {self.meet}"
    
class Ramen(Food):
    def __init__(self, name, price, mozzarella, egg, spicy):
        super().__init__(name, price, mozzarella)
        self.egg = egg
        self.spicy = spicy
    def prepare(self):
        return f"So just prepare ramen by followying instructions on ypakovka and add egg {self.egg} than take water because if it spicy{self.spicy} you die"
    def palochka(self):
        return f"And sure that you have palochki and taste {self.name}"
    def __str__(self):
        return f"{super().__str__()} Some eggs{self.egg} "