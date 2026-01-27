declare module "immersive_aircraft.entity.weapon.Weapon" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$WeaponMount, $WeaponMount$$Type} from "immersive_aircraft.entity.misc.WeaponMount"
import {$VehicleEntity, $VehicleEntity$$Type} from "immersive_aircraft.entity.VehicleEntity"

export class $Weapon {
constructor(entity: $VehicleEntity$$Type, stack: $ItemStack$$Type, mount: $WeaponMount$$Type, slot: integer)

public "getMount"(): $WeaponMount
public "setGunnerOffset"(gunnerOffset: integer): void
public "getGunnerOffset"(): integer
public "clientFire"(arg0: integer): void
public "setAnimationVariables"<T extends $VehicleEntity>(entity: T, time: float): void
public "fire"(arg0: $Vector3f$$Type): void
public "tick"(): void
public "getEntity"(): $VehicleEntity
public "getSlot"(): integer
public "getStack"(): $ItemStack
get "mount"(): $WeaponMount
set "gunnerOffset"(value: integer)
get "gunnerOffset"(): integer
get "entity"(): $VehicleEntity
get "slot"(): integer
get "stack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Weapon$$Type = ($Weapon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Weapon$$Original = $Weapon;}
