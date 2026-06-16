import {
  Code2,
  Database,
  Droplets,
  Folder,
  Globe,
  Leaf,
  Truck,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Database,
  Droplets,
  Folder,
  Globe,
  Leaf,
  Truck,
  UtensilsCrossed,
  Wrench,
}

export function getLucideIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Folder
}
