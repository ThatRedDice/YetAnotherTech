declare module "com.enderio.core.common.item.ICustomCreativeTabEntries" {
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export interface $ICustomCreativeTabEntries$$Interface {
}

export class $ICustomCreativeTabEntries implements $ICustomCreativeTabEntries$$Interface {
 "addAdditionalCreativeTabEntries"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
 "shouldAddDefaultItem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomCreativeTabEntries$$Type = ($ICustomCreativeTabEntries);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICustomCreativeTabEntries$$Original = $ICustomCreativeTabEntries;}
declare module "com.enderio.core.common.graph.Network" {
import {$INetworkNode, $INetworkNode$$Type} from "com.enderio.core.common.graph.INetworkNode"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Set} from "java.util.Set"
import {$Network$IndexedEdgeList, $Network$IndexedEdgeList$$Type} from "com.enderio.core.common.graph.Network$IndexedEdgeList"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $Network<TNet extends $Network<(object), (object)>, TNode extends $INetworkNode<(object), (object)>> {
constructor(arg0: TNode)
constructor(arg0: $List$$Type<(TNode)>, arg1: $List$$Type<($Pair$$Type<(TNode), (TNode)>)>)
constructor(arg0: $List$$Type<(TNode)>, arg1: $Network$IndexedEdgeList$$Type)

public "isDiscarded"(): boolean
public "nodeCount"(): integer
public "connectMany"(arg0: TNode, arg1: $List$$Type<(TNode)>): void
public "connectMany"(arg0: TNode, arg1: $List$$Type<(TNode)>, arg2: $Consumer$$Type<(TNet)>): void
public "createNodeList"(): $List<(TNode)>
public "createEdgeIndices"(): $Network$IndexedEdgeList
public "isValid"(): boolean
public "nodes"(): $Set<(TNode)>
public "remove"(arg0: TNode, arg1: $Consumer$$Type<(TNet)>): void
public "remove"(arg0: TNode): void
public "isEmpty"(): boolean
public "contains"(arg0: TNode): boolean
public "connect"(arg0: TNode, arg1: TNode): void
public "connect"(arg0: TNode, arg1: TNode, arg2: $Consumer$$Type<(TNet)>): void
public "disconnect"(arg0: TNode, arg1: TNode, arg2: $Consumer$$Type<(TNet)>): void
public "disconnect"(arg0: TNode, arg1: TNode): void
public "edges"(): $Stream<($Pair<(TNode), (TNode)>)>
public "neighbors"(arg0: TNode): $Set<(TNode)>
get "discarded"(): boolean
get "valid"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Network$$Type<TNet, TNode> = ($Network<(TNet), (TNode)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Network$$Original<TNet, TNode> = $Network<(TNet), (TNode)>;}
declare module "com.enderio.core.common.recipes.WrappedShapedRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$Function$$Type} from "java.util.function.Function"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$WrappedShapedRecipe} from "com.enderio.core.common.recipes.WrappedShapedRecipe"

export class $WrappedShapedRecipe$Serializer<T extends $WrappedShapedRecipe> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $Function$$Type<($ShapedRecipe), (T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedShapedRecipe$Serializer$$Type<T> = ($WrappedShapedRecipe$Serializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedShapedRecipe$Serializer$$Original<T> = $WrappedShapedRecipe$Serializer<(T)>;}
declare module "com.enderio.core.common.network.menu.payload.SlotPayload" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SlotPayloadType, $SlotPayloadType$$Type} from "com.enderio.core.common.network.menu.payload.SlotPayloadType"

export interface $SlotPayload$$Interface {

(): $SlotPayloadType$$Type
}

export class $SlotPayload implements $SlotPayload$$Interface {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SlotPayload)>

 "type"(): $SlotPayloadType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotPayload$$Type = (() => $SlotPayloadType$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotPayload$$Original = $SlotPayload;}
declare module "com.enderio.core.common.network.NetworkDataSlot$CodecType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map} from "java.util.Map"
import {$NetworkDataSlot$Type$$Interface} from "com.enderio.core.common.network.NetworkDataSlot$Type"
import {$List} from "java.util.List"
import {$NetworkDataSlot} from "com.enderio.core.common.network.NetworkDataSlot"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Set} from "java.util.Set"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Record} from "java.lang.Record"

export class $NetworkDataSlot$CodecType<T> extends $Record implements $NetworkDataSlot$Type$$Interface<(T)> {
constructor(arg0: $Codec$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)
constructor(codec: $Codec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, hashFunction: $Function$$Type<(T), (integer)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "createMap"<T, U>(arg0: $Codec$$Type<(T)>, arg1: $Codec$$Type<(U)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, arg3: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (U)>): $NetworkDataSlot$CodecType<($Map<(T), (U)>)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hash"(arg0: T): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public "read"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $Supplier$$Type<(T)>): T
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: T): $Tag
public "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type, arg2: $Supplier$$Type<(T)>): T
public "create"(arg0: $Supplier$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $NetworkDataSlot<(T)>
public static "createList"<T>(arg0: $Codec$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $NetworkDataSlot$CodecType<($List<(T)>)>
public "codec"(): $Codec<(T)>
public static "createSet"<T>(arg0: $Codec$$Type<(T)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>): $NetworkDataSlot$CodecType<($Set<(T)>)>
public "hashFunction"(): $Function<(T), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDataSlot$CodecType$$Type<T> = ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, "codec"?: $Codec$$Type<(T)>, "hashFunction"?: $Function$$Type<(T), (integer)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>, codec?: $Codec$$Type<(T)>, hashFunction?: $Function$$Type<(T), (integer)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkDataSlot$CodecType$$Original<T> = $NetworkDataSlot$CodecType<(T)>;}
declare module "com.enderio.core.common.blockentity.EnderBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NetworkDataSlot, $NetworkDataSlot$$Type} from "com.enderio.core.common.network.NetworkDataSlot"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderBlockEntity extends $BlockEntity {
static readonly "DATA": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "serverTick"(): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
/**
 * 
 * @deprecated
 */
public "addDataSlot"<T extends $NetworkDataSlot<(object)>>(arg0: T): T
/**
 * 
 * @deprecated
 */
public "addAfterSyncRunnable"(arg0: $Runnable$$Type): void
/**
 * 
 * @deprecated
 */
public "clientUpdateSlot"<T>(arg0: $NetworkDataSlot$$Type<(T)>, arg1: T): void
/**
 * 
 * @deprecated
 */
public "clientHandleBufferSync"(arg0: $RegistryFriendlyByteBuf$$Type): void
/**
 * 
 * @deprecated
 */
public "serverHandleBufferChange"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $EnderBlockEntity$$Type): void
/**
 * 
 * @deprecated
 */
public "sync"(): void
public "endTick"(): void
public "clientTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderBlockEntity$$Type = ($EnderBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderBlockEntity$$Original = $EnderBlockEntity;}
declare module "com.enderio.core.common.recipes.OutputStack" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record} from "java.lang.Record"

export class $OutputStack extends $Record {
static readonly "EMPTY": $OutputStack

constructor(stack: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>)

public "isItem"(): boolean
public "getFluid"(): $FluidStack
public "isFluid"(): boolean
public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $OutputStack
public "getItem"(): $ItemStack
public "stack"(): $Either<($ItemStack), ($FluidStack)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$$Type): $OutputStack
public static "of"(arg0: $FluidStack$$Type): $OutputStack
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
get "item"(): boolean
get "fluid"(): $FluidStack
get "fluid"(): boolean
get "item"(): $ItemStack
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutputStack$$Type = ({"stack"?: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>}) | ([stack?: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutputStack$$Original = $OutputStack;}
declare module "com.enderio.core.common.network.NetworkDataSlot" {
import {$NetworkDataSlot$CodecType} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$NetworkDataSlot$Type$$Type} from "com.enderio.core.common.network.NetworkDataSlot$Type"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $NetworkDataSlot<T> {
static readonly "RESOURCE_LOCATION": $NetworkDataSlot$CodecType<($ResourceLocation)>
static readonly "FLUID_STACK": $NetworkDataSlot$CodecType<($FluidStack)>
static readonly "FLOAT": $NetworkDataSlot$CodecType<(float)>
static readonly "BOOL": $NetworkDataSlot$CodecType<(boolean)>
static readonly "STRING": $NetworkDataSlot$CodecType<(StringJS)>
static readonly "INT": $NetworkDataSlot$CodecType<(integer)>
static readonly "LONG": $NetworkDataSlot$CodecType<(long)>

constructor(arg0: $NetworkDataSlot$Type$$Type<(T)>, arg1: $Supplier$$Type<(T)>, arg2: $Consumer$$Type<(T)>)

public "doesNeedUpdate"(): boolean
public "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "read"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: boolean): $Tag
public "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDataSlot$$Type<T> = ($NetworkDataSlot<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkDataSlot$$Original<T> = $NetworkDataSlot<(T)>;}
declare module "com.enderio.core.common.recipes.WrappedShapedRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $WrappedShapedRecipe extends $ShapedRecipe implements $CraftingRecipe$$Interface {
readonly "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList
public "getIngredients"(): $NonNullList<($Ingredient)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "category"(): $CraftingBookCategory
public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "getWrapped"(): $ShapedRecipe
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "width"(): integer
get "height"(): integer
get "group"(): StringJS
get "special"(): boolean
get "wrapped"(): $ShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedShapedRecipe$$Type = ($WrappedShapedRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedShapedRecipe$$Original = $WrappedShapedRecipe;}
declare module "com.enderio.core.common.graph.Network$IndexedEdgeList" {
import {$INetworkNode} from "com.enderio.core.common.graph.INetworkNode"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Record} from "java.lang.Record"

export class $Network$IndexedEdgeList extends $Record {
static readonly "CODEC": $Codec<($Network$IndexedEdgeList)>

constructor(edges: $List$$Type<($Pair$$Type<(integer), (integer)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "expand"<TNode extends $INetworkNode<(object), (object)>>(arg0: $List$$Type<(TNode)>): $List<($Pair<(TNode), (TNode)>)>
public "edges"(): $List<($Pair<(integer), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Network$IndexedEdgeList$$Type = ({"edges"?: $List$$Type<($Pair$$Type<(integer), (integer)>)>}) | ([edges?: $List$$Type<($Pair$$Type<(integer), (integer)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Network$IndexedEdgeList$$Original = $Network$IndexedEdgeList;}
declare module "com.enderio.core.common.network.NetworkDataSlot$Type" {
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $NetworkDataSlot$Type$$Interface<T> {
}

export class $NetworkDataSlot$Type<T> implements $NetworkDataSlot$Type$$Interface {
 "hash"(arg0: T): integer
 "write"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
 "read"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $Supplier$$Type<(T)>): T
 "save"(arg0: $HolderLookup$Provider$$Type, arg1: T): $Tag
 "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type, arg2: $Supplier$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDataSlot$Type$$Type<T> = ($NetworkDataSlot$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkDataSlot$Type$$Original<T> = $NetworkDataSlot$Type<(T)>;}
declare module "com.enderio.core.common.menu.BaseEnderMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$SlotPayload$$Type} from "com.enderio.core.common.network.menu.payload.SlotPayload"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $BaseEnderMenu extends $AbstractContainerMenu {
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
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "sendAllDataToRemote"(): void
public "clientHandleIncomingPayload"(arg0: short, arg1: $SlotPayload$$Type): void
public "serverHandleIncomingPayload"(arg0: short, arg1: $SlotPayload$$Type): void
public "broadcastChanges"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseEnderMenu$$Type = ($BaseEnderMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseEnderMenu$$Original = $BaseEnderMenu;}
declare module "com.enderio.core.common.graph.INetworkNode" {
import {$Network, $Network$$Type} from "com.enderio.core.common.graph.Network"

export interface $INetworkNode$$Interface<TNet extends $Network<(object), (object)>, TNode extends $INetworkNode<(object), (object)>> {
get "network"(): TNet
set "network"(value: TNet)
get "valid"(): boolean
}

export class $INetworkNode<TNet extends $Network<(object), (object)>, TNode extends $INetworkNode<(object), (object)>> implements $INetworkNode$$Interface {
 "getNetwork"(): TNet
 "setNetwork"(arg0: TNet): void
 "isValid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkNode$$Type<TNet, TNode> = ($INetworkNode<(TNet), (TNode)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INetworkNode$$Original<TNet, TNode> = $INetworkNode<(TNet), (TNode)>;}
