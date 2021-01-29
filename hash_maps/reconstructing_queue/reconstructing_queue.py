def reconstructing_queue(
    people=[('marcos', 'júlia'), ('rafa', 'marcos'), ('júlia', 'fred'),
            ('fernanda', 'rafa')]
):
    queue = {}
    left = []
    right = []

    for prev_person, next_person in people:
        left.append(prev_person)
        right.append(next_person)
        queue[prev_person] = {"name": next_person, "count": 0}

    for _, next_person in people:
        if queue.get(next_person):
            queue[next_person]["count"] += 1

    next_person = [person for person in left if queue[person]["count"] == 0][0]
    # this is actually the first person of the queue

    ordered_queue = [next_person]
    while queue.get(next_person):
        ordered_queue.append(queue[next_person]["name"])
        next_person = queue[next_person]["name"]

    return ordered_queue


print(reconstructing_queue())
