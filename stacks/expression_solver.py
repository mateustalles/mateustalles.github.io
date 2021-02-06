def expression_solver(expr):
    if isinstance(expr, str):
        expr = expr.split(" ")

    op_dict = {
        '+': lambda x, y: x + y,
        '*': lambda x, y: x * y,
        '/': lambda x, y: x / y,
        '-': lambda x, y: x - y
    }
    
    first_num, *rest = expr
    
    first_num = op_dict[rest[1]](int(first_num), int(rest[0]))

    if rest[2::] == []:
        print(first_num)
        return first_num

    new_expr = [first_num]
    new_expr.extend(rest[2::])
    return expression_solver(new_expr)


if __name__ == "__main__":
    expression_solver("1 2 + 3 * 4 * 8 - 7 /")
