declare module "blusunrize.immersiveengineering.common.gui.IScreenMessageReceive" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $IScreenMessageReceive$$Interface {
}

export class $IScreenMessageReceive implements $IScreenMessageReceive$$Interface {
 "receiveMessageFromScreen"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenMessageReceive$$Type = ($IScreenMessageReceive);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScreenMessageReceive$$Original = $IScreenMessageReceive;}
declare module "blusunrize.immersiveengineering.common.gui.IEContainerMenu$MoveItemsFunc" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IEContainerMenu$MoveItemsFunc$$Interface {

(arg0: $ItemStack, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export class $IEContainerMenu$MoveItemsFunc implements $IEContainerMenu$MoveItemsFunc$$Interface {
 "moveItemStackTo"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEContainerMenu$MoveItemsFunc$$Type = ((arg0: $ItemStack, arg1: integer, arg2: integer, arg3: boolean) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEContainerMenu$MoveItemsFunc$$Original = $IEContainerMenu$MoveItemsFunc;}
declare module "blusunrize.immersiveengineering.common.gui.sync.GenericDataSerializers$DataSerializer" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $GenericDataSerializers$DataSerializer<T> extends $Record {
constructor(codec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, copy: $UnaryOperator$$Type<(T)>, equals: $BiPredicate$$Type<(T), (T)>, id: integer)

public "equals"(): $BiPredicate<(T), (T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): integer
public "copy"(): $UnaryOperator<(T)>
public "codec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDataSerializers$DataSerializer$$Type<T> = ({"codec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, "equals"?: $BiPredicate$$Type<(T), (T)>, "id"?: integer, "copy"?: $UnaryOperator$$Type<(T)>}) | ([codec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, equals?: $BiPredicate$$Type<(T), (T)>, id?: integer, copy?: $UnaryOperator$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericDataSerializers$DataSerializer$$Original<T> = $GenericDataSerializers$DataSerializer<(T)>;}
declare module "blusunrize.immersiveengineering.common.gui.sync.GenericDataSerializers$DataPair" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$GenericDataSerializers$DataSerializer, $GenericDataSerializers$DataSerializer$$Type} from "blusunrize.immersiveengineering.common.gui.sync.GenericDataSerializers$DataSerializer"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $GenericDataSerializers$DataPair<T> extends $Record {
static readonly "CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GenericDataSerializers$DataPair<(never)>)>

constructor(serializer: $GenericDataSerializers$DataSerializer$$Type<(T)>, data: T)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "data"(): T
public "serializer"(): $GenericDataSerializers$DataSerializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericDataSerializers$DataPair$$Type<T> = ({"serializer"?: $GenericDataSerializers$DataSerializer$$Type<(T)>, "data"?: T}) | ([serializer?: $GenericDataSerializers$DataSerializer$$Type<(T)>, data?: T]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericDataSerializers$DataPair$$Original<T> = $GenericDataSerializers$DataPair<(T)>;}
declare module "blusunrize.immersiveengineering.common.gui.IEContainerMenu$MenuContext" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Record} from "java.lang.Record"

export class $IEContainerMenu$MenuContext extends $Record {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEContainerMenu$MenuContext$$Type = ({"isValid"?: $Predicate$$Type<($Player$$Type)>, "id"?: integer, "setChanged"?: $Runnable$$Type, "type"?: $MenuType$$Type<(never)>}) | ([isValid?: $Predicate$$Type<($Player$$Type)>, id?: integer, setChanged?: $Runnable$$Type, type?: $MenuType$$Type<(never)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEContainerMenu$MenuContext$$Original = $IEContainerMenu$MenuContext;}
declare module "blusunrize.immersiveengineering.common.gui.sync.GenericContainerData" {
import {$FluidTank$$Type} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$IMutableEnergyStorage$$Type} from "blusunrize.immersiveengineering.api.energy.IMutableEnergyStorage"
import {$GenericDataSerializers$DataSerializer$$Type} from "blusunrize.immersiveengineering.common.gui.sync.GenericDataSerializers$DataSerializer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$GenericDataSerializers$DataPair} from "blusunrize.immersiveengineering.common.gui.sync.GenericDataSerializers$DataPair"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GetterAndSetter$$Type} from "blusunrize.immersiveengineering.common.gui.sync.GetterAndSetter"

export class $GenericContainerData<T> {
constructor(arg0: $GenericDataSerializers$DataSerializer$$Type<(T)>, arg1: $GetterAndSetter$$Type<(T)>)
constructor(arg0: $GenericDataSerializers$DataSerializer$$Type<(T)>, arg1: $Supplier$$Type<(T)>, arg2: $Consumer$$Type<(T)>)

public static "energy"(arg0: $IMutableEnergyStorage$$Type): $GenericContainerData<(never)>
public static "fluid"(arg0: $FluidTank$$Type): $GenericContainerData<($FluidStack)>
public "dataPair"(): $GenericDataSerializers$DataPair<(T)>
public "processSync"(arg0: any): void
public static "int32"(arg0: $Supplier$$Type<(integer)>, arg1: $Consumer$$Type<(integer)>): $GenericContainerData<(integer)>
public static "float32"(arg0: $Supplier$$Type<(float)>, arg1: $Consumer$$Type<(float)>): $GenericContainerData<(float)>
public static "bool"(arg0: $Supplier$$Type<(boolean)>, arg1: $Consumer$$Type<(boolean)>): $GenericContainerData<(boolean)>
public "needsUpdate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericContainerData$$Type<T> = ($GenericContainerData<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericContainerData$$Original<T> = $GenericContainerData<(T)>;}
declare module "blusunrize.immersiveengineering.common.gui.IEContainerMenu$MultiblockMenuContext" {
import {$IMultiblockContext, $IMultiblockContext$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockContext"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $IEContainerMenu$MultiblockMenuContext<S extends $IMultiblockState> extends $Record {
constructor(mbContext: $IMultiblockContext$$Type<(S)>, clickedPos: $BlockPos$$Type)

public "mbContext"(): $IMultiblockContext<(S)>
public "clickedPos"(): $BlockPos
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEContainerMenu$MultiblockMenuContext$$Type<S> = ({"clickedPos"?: $BlockPos$$Type, "mbContext"?: $IMultiblockContext$$Type<(S)>}) | ([clickedPos?: $BlockPos$$Type, mbContext?: $IMultiblockContext$$Type<(S)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEContainerMenu$MultiblockMenuContext$$Original<S> = $IEContainerMenu$MultiblockMenuContext<(S)>;}
declare module "blusunrize.immersiveengineering.common.gui.sync.GetterAndSetter" {
import {$List} from "java.util.List"
import {$Supplier, $Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"
import {$Record} from "java.lang.Record"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export class $GetterAndSetter<T> extends $Record implements $Supplier$$Interface<(T)>, $Consumer$$Interface<(T)> {
constructor(getter: $Supplier$$Type<(T)>, setter: $Consumer$$Type<(T)>)

public static "getterOnly"<T>(arg0: $Supplier$$Type<(T)>): $GetterAndSetter<(T)>
public static "standalone"<T>(arg0: T): $GetterAndSetter<(T)>
public "setter"(): $Consumer<(T)>
public "get"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "constant"<T>(arg0: T): $GetterAndSetter<(T)>
public "set"(arg0: T): void
public "accept"(arg0: T): void
public "getter"(): $Supplier<(T)>
public static "forArray"<T>(arg0: (T)[]): $List<($GetterAndSetter<(T)>)>
public "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
get "ter"(): $Consumer<(T)>
get "ter"(): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GetterAndSetter$$Type<T> = ({"getter"?: $Supplier$$Type<(T)>, "setter"?: $Consumer$$Type<(T)>}) | ([getter?: $Supplier$$Type<(T)>, setter?: $Consumer$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GetterAndSetter$$Original<T> = $GetterAndSetter<(T)>;}
declare module "blusunrize.immersiveengineering.common.gui.IEContainerMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IEContainerMenu$MoveItemsFunc$$Type} from "blusunrize.immersiveengineering.common.gui.IEContainerMenu$MoveItemsFunc"
import {$Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$PlayerContainerEvent$Open$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerContainerEvent$Open"
import {$GenericDataSerializers$DataPair$$Type} from "blusunrize.immersiveengineering.common.gui.sync.GenericDataSerializers$DataPair"
import {$GenericContainerData$$Type} from "blusunrize.immersiveengineering.common.gui.sync.GenericContainerData"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$IScreenMessageReceive$$Interface} from "blusunrize.immersiveengineering.common.gui.IScreenMessageReceive"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$IEContainerMenu$MenuContext} from "blusunrize.immersiveengineering.common.gui.IEContainerMenu$MenuContext"
import {$PlayerContainerEvent$Close$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerContainerEvent$Close"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IEContainerMenu$MultiblockMenuContext$$Type} from "blusunrize.immersiveengineering.common.gui.IEContainerMenu$MultiblockMenuContext"

export class $IEContainerMenu extends $AbstractContainerMenu implements $IScreenMessageReceive$$Interface {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "ownSlotCount": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public static "itemCtx"(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $EquipmentSlot$$Type, arg4: $ItemStack$$Type): $IEContainerMenu$MenuContext
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "receiveSync"(arg0: $List$$Type<($Pair$$Type<(integer), ($GenericDataSerializers$DataPair$$Type<(never)>)>)>): void
public static "blockCtx"(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $BlockEntity$$Type): $IEContainerMenu$MenuContext
public "addGenericData"(arg0: $GenericContainerData$$Type<(never)>): void
public "moveToMatchingSlotOrAdjacent"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): boolean
public static "onContainerOpened"(arg0: $PlayerContainerEvent$Open$$Type): void
public static "onContainerClosed"(arg0: $PlayerContainerEvent$Close$$Type): void
public static "multiblockCtx"(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $IEContainerMenu$MultiblockMenuContext$$Type<(never)>): $IEContainerMenu$MenuContext
public static "clientCtx"(arg0: $MenuType$$Type<(never)>, arg1: integer): $IEContainerMenu$MenuContext
public static "moveItemStackToWithMayPlace"(arg0: $List$$Type<($Slot$$Type)>, arg1: $IEContainerMenu$MoveItemsFunc$$Type, arg2: $ItemStack$$Type, arg3: integer, arg4: integer): boolean
public "removed"(arg0: $Player$$Type): void
public "broadcastChanges"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "receiveMessageFromScreen"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEContainerMenu$$Type = ($IEContainerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEContainerMenu$$Original = $IEContainerMenu;}
