declare module "com.hrznstudio.titanium.network.locator.PlayerInventoryFinder$IStackModifier" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $PlayerInventoryFinder$IStackModifier$$Interface {

(arg0: $Player, arg1: integer, arg2: $ItemStack): void
}

export class $PlayerInventoryFinder$IStackModifier implements $PlayerInventoryFinder$IStackModifier$$Interface {
 "consume"(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInventoryFinder$IStackModifier$$Type = ((arg0: $Player, arg1: integer, arg2: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInventoryFinder$IStackModifier$$Original = $PlayerInventoryFinder$IStackModifier;}
declare module "com.hrznstudio.titanium.network.locator.PlayerInventoryFinder$Target" {
import {$PlayerInventoryFinder, $PlayerInventoryFinder$$Type} from "com.hrznstudio.titanium.network.locator.PlayerInventoryFinder"

export class $PlayerInventoryFinder$Target {
constructor(arg0: StringJS, arg1: $PlayerInventoryFinder$$Type, arg2: integer)

public "getFinder"(): $PlayerInventoryFinder
public "getName"(): StringJS
public "getSlot"(): integer
get "finder"(): $PlayerInventoryFinder
get "name"(): StringJS
get "slot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInventoryFinder$Target$$Type = ($PlayerInventoryFinder$Target);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInventoryFinder$Target$$Original = $PlayerInventoryFinder$Target;}
declare module "com.hrznstudio.titanium.network.IButtonHandler" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $IButtonHandler$$Interface {

(arg0: integer, arg1: $Player, arg2: $CompoundTag): void
}

export class $IButtonHandler implements $IButtonHandler$$Interface {
 "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IButtonHandler$$Type = ((arg0: integer, arg1: $Player, arg2: $CompoundTag) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IButtonHandler$$Original = $IButtonHandler;}
declare module "com.hrznstudio.titanium.network.locator.PlayerInventoryFinder" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$PlayerInventoryFinder$IStackModifier, $PlayerInventoryFinder$IStackModifier$$Type} from "com.hrznstudio.titanium.network.locator.PlayerInventoryFinder$IStackModifier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$HashMap} from "java.util.HashMap"

export class $PlayerInventoryFinder {
static "MAIN": StringJS
static "FINDERS": $HashMap<(StringJS), ($PlayerInventoryFinder)>

constructor(arg0: $Function$$Type<($Player), (integer)>, arg1: $BiFunction$$Type<($Player), (integer), ($ItemStack$$Type)>, arg2: $PlayerInventoryFinder$IStackModifier$$Type)

public "getStackGetter"(): $BiFunction<($Player), (integer), ($ItemStack)>
public "getSlotAmountGetter"(): $Function<($Player), (integer)>
public "getStackSetter"(): $PlayerInventoryFinder$IStackModifier
public static "get"(arg0: StringJS): $Optional<($PlayerInventoryFinder)>
public static "init"(): void
get "stackGetter"(): $BiFunction<($Player), (integer), ($ItemStack)>
get "slotAmountGetter"(): $Function<($Player), (integer)>
get "stackSetter"(): $PlayerInventoryFinder$IStackModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInventoryFinder$$Type = ($PlayerInventoryFinder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerInventoryFinder$$Original = $PlayerInventoryFinder;}
