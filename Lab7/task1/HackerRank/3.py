if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    scores = {s[1] for s in students}
    
    second_lowest_score = sorted(scores)[1]

    result_names = [s[0] for s in students if s[1] == second_lowest_score]

    for name in sorted(result_names):
        print(name)