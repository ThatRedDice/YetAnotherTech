declare module "appeng.crafting.CraftingLink" {
import {$CraftingLinkNexus$$Type} from "appeng.crafting.CraftingLinkNexus"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$UUID} from "java.util.UUID"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"
import {$ICraftingLink$$Interface} from "appeng.api.networking.crafting.ICraftingLink"

export class $CraftingLink implements $ICraftingLink$$Interface {
constructor(arg0: $CompoundTag$$Type, arg1: $ICraftingCPU$$Type)
constructor(arg0: $CompoundTag$$Type, arg1: $ICraftingRequester$$Type)

public "writeToNBT"(arg0: $CompoundTag$$Type): void
public "getCraftingID"(): $UUID
public "setNexus"(arg0: $CraftingLinkNexus$$Type): void
public "markDone"(): void
public "isStandalone"(): boolean
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "isDone"(): boolean
public "cancel"(): void
public "isCanceled"(): boolean
get "craftingID"(): $UUID
set "nexus"(value: $CraftingLinkNexus$$Type)
get "standalone"(): boolean
get "done"(): boolean
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingLink$$Type = ($CraftingLink);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingLink$$Original = $CraftingLink;}
