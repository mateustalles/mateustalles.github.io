

def infix_to_postfix(expr, last_item=None, new_expr=None):
    def add_before(value, *args):
        for arg in args:
            if " " not in value or " " not in arg:
                value = arg + " " + value
            else:
                value = arg + value
        return value

    if not expr:
        return new_expr

    elif len(expr) == 1:
        new_expr = add_before(new_expr, expr[0])
        return new_expr

    if isinstance(expr, str):
        expr = expr.split(" ")

    operators = set(["*", "/", "+", "-"])

    if new_expr == None:
        new_expr = str()

    last_item = expr[-1]

    new_expr_batch = str()

    if last_item == ")":
        closing_parenthesis = expr.pop()
        while expr[-1] != "(":
            factor = expr.pop()
            if expr[-1] in operators:
                operator = expr.pop()
                new_expr_batch = add_before(new_expr_batch, operator[0], factor[0])
                # new_expr_batch = add_before(new_expr_batch, factor[0])
            else:
                new_expr_batch = add_before(new_expr_batch, factor[0])
        opening_parenthesis = expr.pop()
        if not expr:
            new_expr_batch = add_before(new_expr_batch, opening_parenthesis[0])
            new_expr_batch += closing_parenthesis[0]
        else:
            opening_operator = expr.pop()
            new_expr_batch = add_before(new_expr_batch, opening_parenthesis[0])
            new_expr_batch += closing_parenthesis[0] + " " + opening_operator[0] + " "
    else:
        factor = expr.pop()
        operator = expr.pop()
        new_expr_batch = add_before(new_expr_batch, operator[0])
        new_expr_batch = add_before(new_expr_batch, factor[0])

    new_expr = add_before(new_expr, new_expr_batch)
    
    return infix_to_postfix(expr, last_item, new_expr)
    


if __name__ == "__main__":
    expr1 = "A + B - C / A" 
    expr2 = "B + ( A * C ) / C * 2"
    expr3  = "A * B - C + 4 * A - B"
    expr4 = "( A + C / B ) * ( A + B )"
    expr5 = "50 + B / 2 * 5 / A"

    print(infix_to_postfix(expr1))
    print(infix_to_postfix(expr2))
    print(infix_to_postfix(expr3))
    print(infix_to_postfix(expr4))
    print(infix_to_postfix(expr5))


