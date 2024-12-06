def organize_shoes(shoes: list[dict]) -> list[int]:
    pair_of_shoes = []
    if not shoes:
        return pair_of_shoes

    map_of_shoes = {}

    for shoe in shoes:
        opposite_shoe = 'R' if shoe['type'] == 'I' else 'I'
        opposite_pair = f"{opposite_shoe}_{shoe['size']}"

        if map_of_shoes.get(opposite_pair, 0) > 0:
            map_of_shoes[opposite_pair] -= 1
            pair_of_shoes.append(shoe['size'])
        else:
            current_shoe = f"{shoe['type']}_{shoe['size']}"
            map_of_shoes[current_shoe] = map_of_shoes.get(current_shoe, 0) + 1

    return pair_of_shoes