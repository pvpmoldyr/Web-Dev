n = int(input())
countries = set()
for _ in range(n):
    country_name = input()
    countries.add(country_name)
print(len(countries))