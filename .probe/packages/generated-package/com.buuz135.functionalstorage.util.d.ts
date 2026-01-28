declare module "com.buuz135.functionalstorage.util.CompactingUtil" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CompactingUtil$Result} from "com.buuz135.functionalstorage.util.CompactingUtil$Result"

export class $CompactingUtil {
constructor(arg0: $Level$$Type, arg1: integer)

public "rearrangeResults"(arg0: $ItemStack$$Type, arg1: integer): $List<($CompactingUtil$Result)>
public "setup"(arg0: $ItemStack$$Type): void
public "setup"(arg0: $ItemStack$$Type, arg1: integer): void
public "getResults"(): $List<($CompactingUtil$Result)>
set "up"(value: $ItemStack$$Type)
get "results"(): $List<($CompactingUtil$Result)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUtil$$Type = ($CompactingUtil);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingUtil$$Original = $CompactingUtil;}
declare module "com.buuz135.functionalstorage.util.CompactingUtil$Result" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $CompactingUtil$Result {
constructor(arg0: $ItemStack$$Type, arg1: integer)

public "getNeeded"(): integer
public "setNeeded"(arg0: integer): void
public "setResult"(arg0: $ItemStack$$Type): void
public "getResult"(): $ItemStack
public "toString"(): StringJS
get "needed"(): integer
set "needed"(value: integer)
set "result"(value: $ItemStack$$Type)
get "result"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUtil$Result$$Type = ($CompactingUtil$Result);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingUtil$Result$$Original = $CompactingUtil$Result;}
declare module "com.buuz135.functionalstorage.util.ConnectedDrawers" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$StorageControllerTile$$Type} from "com.buuz135.functionalstorage.block.tile.StorageControllerTile"

export class $ConnectedDrawers implements $INBTSerializable$$Interface<($CompoundTag)> {
constructor(arg0: $Level$$Type, arg1: $StorageControllerTile$$Type<(never)>)

public "getItemHandlers"(): $List<($IItemHandler)>
public "getFluidHandlers"(): $List<($IFluidHandler)>
public "rebuildShapes"(): void
public "getConnectedDrawers"(): $List<(long)>
public "getCachedVoxelShape"(): $VoxelShape
public "setLevel"(arg0: $Level$$Type): void
public "getExtensions"(): integer
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "rebuild"(): void
get "itemHandlers"(): $List<($IItemHandler)>
get "fluidHandlers"(): $List<($IFluidHandler)>
get "connectedDrawers"(): $List<(long)>
get "cachedVoxelShape"(): $VoxelShape
set "level"(value: $Level$$Type)
get "extensions"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedDrawers$$Type = ($ConnectedDrawers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectedDrawers$$Original = $ConnectedDrawers;}
declare module "com.buuz135.functionalstorage.util.IWoodType" {
import {$Block} from "net.minecraft.world.level.block.Block"

export interface $IWoodType$$Interface {
get "planks"(): $Block
get "wood"(): $Block
get "name"(): StringJS
}

export class $IWoodType implements $IWoodType$$Interface {
 "getPlanks"(): $Block
 "getWood"(): $Block
 "getName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWoodType$$Type = ($IWoodType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWoodType$$Original = $IWoodType;}
