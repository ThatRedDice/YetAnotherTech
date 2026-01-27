declare module "com.minecraftserverzone.weaponmaster.setup.playerdata.IPlayerData" {
import {$PlayerData, $PlayerData$$Type} from "com.minecraftserverzone.weaponmaster.setup.playerdata.PlayerData"

export interface $IPlayerData$$Interface {
get "playerData"(): $PlayerData
set "playerData"(value: $PlayerData$$Type)
}

export class $IPlayerData implements $IPlayerData$$Interface {
 "getPlayerData"(): $PlayerData
 "setPlayerData"(arg0: $PlayerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerData$$Type = ($IPlayerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerData$$Original = $IPlayerData;}
declare module "com.minecraftserverzone.weaponmaster.setup.playerdata.PlayerData" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"

export class $PlayerData {
 "lastMainhandHit": integer
 "scale": (integer)[]
 "blacklist": StringJS
 "positions": (integer)[]
 "whitelist": StringJS
 "inventory": ($ItemStack)[]
 "selectedSlot": integer
 "mover": StringJS
 "uniqueItemDisplay": StringJS
 "toggleSlots": (integer)[]
 "hideTick": integer
 "rotations": (integer)[]
 "lastOffhandHit": integer
 "slotAttachments": StringJS

constructor()

public "getAllData"(): $PlayerData
public "tick"(arg0: $Player$$Type): void
get "allData"(): $PlayerData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerData$$Type = ($PlayerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerData$$Original = $PlayerData;}
