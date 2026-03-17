from models import Food,Sandwitch,Ramen

food_all = [
    Food("So what food", 10000, "500"),
    Sandwitch("Bagle", 750, "500", "three lomtics", 2),
    Ramen("Red", 1250, "700", 2, "Hot"),
    Sandwitch("Baget", 850, "none", "5 lomtics", 2)
    
]
for food in food_all:
    print(f"{food.name}:")
    print(f"{food.money()}")
    print(f"{food.prepare()}")
        
    if hasattr(food, 'palochka'):
        print(f"{food.palochka()}")
        
for item in food_all:
    print(item)

if isinstance(food, Sandwitch):
    print(f"{food.name} Bread: {food.breed}, Meat: {food.meet}")
elif isinstance(food, Ramen):
    print(f"{food.name} Spicy: {food.spicy}, Egg: {food.egg}")
