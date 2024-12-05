def createFramePy(names: list[str]) -> string:
  if not names: return ""
  max_length = max(len(name) for name in names)

  framed_names = [f"* {name} {' ' * (max_length - len(name))} *" for name in names]
  border = "*" * (max_length + 4)

  return "\n".join([border, *framed_names, border])
