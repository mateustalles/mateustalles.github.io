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
        queue[prev_person] = [next_person, 0]

    for _, next_person in people:
        if queue.get(next_person):
            queue[next_person][1] += 1

    next_person = [person for person in left if queue[person][1] == 0][0]
    # this is actually the first person of the queue

    ordered_queue = [next_person]
    while queue.get(next_person):
        ordered_queue.append(queue[next_person][0])
        next_person = queue[next_person][0]

    return ordered_queue


print(reconstructing_queue())
