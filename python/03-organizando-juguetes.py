def organizeInventory(inventory):
  if len(inventory) == 0: return {}

  organizedInventory = {}

  for {category, name, quantity} in inventory:
    organizedInventory[category] ||= {}
    organizedInventory[category][name] = (organizedInventory[category][name] || 0) + quantity

  return organizedInventory
