declare module "com.simibubi.create.compat.computercraft.events.ComputerEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ComputerEvent$$Interface {
}

export class $ComputerEvent implements $ComputerEvent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerEvent$$Type = ($ComputerEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerEvent$$Original = $ComputerEvent;}
declare module "com.simibubi.create.compat.jei.category.sequencedAssembly.SequencedAssemblySubCategory" {
import {$IRecipeLayoutBuilder$$Type} from "mezz.jei.api.gui.builder.IRecipeLayoutBuilder"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IFocusGroup$$Type} from "mezz.jei.api.recipe.IFocusGroup"
import {$SequencedRecipe$$Type} from "com.simibubi.create.content.processing.sequenced.SequencedRecipe"

export class $SequencedAssemblySubCategory {
constructor(arg0: integer)

public "setRecipe"(arg0: $IRecipeLayoutBuilder$$Type, arg1: $SequencedRecipe$$Type<(never)>, arg2: $IFocusGroup$$Type, arg3: integer): void
public "getWidth"(): integer
public "draw"(arg0: $SequencedRecipe$$Type<(never)>, arg1: $GuiGraphics$$Type, arg2: double, arg3: double, arg4: integer): void
get "width"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedAssemblySubCategory$$Type = ($SequencedAssemblySubCategory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequencedAssemblySubCategory$$Original = $SequencedAssemblySubCategory;}
declare module "com.simibubi.create.compat.computercraft.AbstractComputerBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ComputerEvent$$Type} from "com.simibubi.create.compat.computercraft.events.ComputerEvent"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$IPeripheral} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AbstractComputerBehaviour extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($AbstractComputerBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type)

public "removePeripheral"(): void
public "getPeripheralCapability"(): $IPeripheral
public "setHasAttachedComputer"(arg0: boolean): void
public "hasAttachedComputer"(): boolean
public "prepareComputerEvent"(arg0: $ComputerEvent$$Type): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getType"(): $BehaviourType<(never)>
get "peripheralCapability"(): $IPeripheral
get "type"(): $BehaviourType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerBehaviour$$Type = ($AbstractComputerBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractComputerBehaviour$$Original = $AbstractComputerBehaviour;}
