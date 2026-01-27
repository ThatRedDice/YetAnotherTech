declare module "appeng.client.render.crafting.AssemblerAnimationStatus" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $AssemblerAnimationStatus {
constructor(arg0: byte, arg1: $ItemStack$$Type)

public "isExpired"(): boolean
public "getSpeed"(): byte
public "getIs"(): $ItemStack
public "getAccumulatedTicks"(): float
public "setAccumulatedTicks"(arg0: float): void
public "getTicksUntilParticles"(): float
public "setTicksUntilParticles"(arg0: float): void
get "expired"(): boolean
get "speed"(): byte
get "is"(): boolean
get "accumulatedTicks"(): float
set "accumulatedTicks"(value: float)
get "ticksUntilParticles"(): float
set "ticksUntilParticles"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblerAnimationStatus$$Type = ($AssemblerAnimationStatus);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblerAnimationStatus$$Original = $AssemblerAnimationStatus;}
