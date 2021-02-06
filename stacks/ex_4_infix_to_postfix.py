

def infix_to_postfix(expr, last_item=None, new_expr=None):
    if not expr:
        return new_expr
    elif len(expr) == 1:
        new_expr.insert(0, expr)
        return new_expr

    if isinstance(expr, str):
        expr = expr.split(" ")

    operators = set(["*", "/", "+", "-"])

    if new_expr == None:
        new_expr = list()

    last_item = expr[-1]

    new_expr_batch = list()

    def add_before(val1, val2):
        val1 = val2 + " " + val1


    if last_item == ")":
        closing_parenthesis = expr.pop()
        while expr[-1] != "(":
            factor = expr.pop()
            if expr[-1] in operators:
                operator = expr.pop()
                
                new_expr_batch.insert(0,[factor, operator])
            else:
                new_expr_batch.insert(0, factor)
        opening_parenthesis = expr.pop()
        if not expr:
            new_expr_batch.insert(0, opening_parenthesis)
            new_expr_batch.extend(closing_parenthesis)
        else:
            opening_operator = expr.pop()
            new_expr_batch.insert(0, opening_parenthesis)
            new_expr_batch.extend([closing_parenthesis, opening_operator])
    else:
        factor = expr.pop()
        operator = expr.pop()
        new_expr_batch.insert(0, [factor, operator])

    new_expr.insert(0, new_expr_batch)
    
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


