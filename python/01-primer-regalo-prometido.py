def prepare_gifts(gifts: list[int]) -> list[int]:
    if not gifts:
        return []
    return sorted(set(gifts))
