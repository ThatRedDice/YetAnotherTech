declare module "blusunrize.immersiveengineering.common.fluids.PotionFluid$PotionFluidType" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Lazy} from "net.neoforged.neoforge.common.util.Lazy"
import {$Component} from "net.minecraft.network.chat.Component"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"

export class $PotionFluid$PotionFluidType extends $FluidType {
static readonly "TEXTURE_STILL": $ResourceLocation
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer
static readonly "TEXTURE_FLOW": $ResourceLocation

constructor()

public "getDescription"(arg0: $FluidStack$$Type): $Component
public "getBucket"(arg0: $FluidStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluid$PotionFluidType$$Type = ($PotionFluid$PotionFluidType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionFluid$PotionFluidType$$Original = $PotionFluid$PotionFluidType;}
declare module "blusunrize.immersiveengineering.common.fluids.PotionFluid" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Optional$$Type} from "java.util.Optional"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$PotionFluid$PotionBottleType$$Type} from "blusunrize.immersiveengineering.common.fluids.PotionFluid$PotionBottleType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $PotionFluid extends $Fluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "addInformation"(arg0: $FluidStack$$Type, arg1: $Consumer$$Type<($Component)>): void
public "isSource"(arg0: $FluidState$$Type): boolean
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "getOwnHeight"(arg0: $FluidState$$Type): float
public static "getFluidStackForType"(arg0: ($Holder$$Type<($Potion$$Type)>)?, arg1: integer, arg2: $PotionFluid$PotionBottleType$$Type): $FluidStack
public "getHeight"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getShape"(arg0: $FluidState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public static "getType"(arg0: $FluidStack$$Type): $Holder<($Potion)>
public "getBucket"(): $Item
public "getFluidType"(): $FluidType
public "getAmount"(arg0: $FluidState$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "bucket"(): $Item
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluid$$Type = ($PotionFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionFluid$$Original = $PotionFluid;}
declare module "blusunrize.immersiveengineering.common.fluids.IEFluid$EntityFluidSerializer" {
import {$EntityDataSerializer, $EntityDataSerializer$$Interface} from "net.minecraft.network.syncher.EntityDataSerializer"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EntityDataAccessor} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $IEFluid$EntityFluidSerializer implements $EntityDataSerializer$$Interface<($FluidStack)> {
constructor()

public "copy"(arg0: any): any
public "copy"(arg0: $FluidStack$$Type): $FluidStack
public "codec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStack)>
public static "forValueType"<T>(arg0: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), ($FluidStack$$Type)>): $EntityDataSerializer<($FluidStack)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluid$EntityFluidSerializer$$Type = ($IEFluid$EntityFluidSerializer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEFluid$EntityFluidSerializer$$Original = $IEFluid$EntityFluidSerializer;}
declare module "blusunrize.immersiveengineering.common.fluids.ConcreteFluid$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ConcreteFluid} from "blusunrize.immersiveengineering.common.fluids.ConcreteFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$Holder} from "net.minecraft.core.Holder"
import {$IEFluids$FluidEntry$$Type} from "blusunrize.immersiveengineering.common.register.IEFluids$FluidEntry"

export class $ConcreteFluid$Flowing extends $ConcreteFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "BUCKET_DISPENSE_BEHAVIOR": $DispenseItemBehavior
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $IEFluids$FluidEntry$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcreteFluid$Flowing$$Type = ($ConcreteFluid$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcreteFluid$Flowing$$Original = $ConcreteFluid$Flowing;}
declare module "blusunrize.immersiveengineering.common.fluids.ConcreteFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IEFluid} from "blusunrize.immersiveengineering.common.fluids.IEFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$IEFluids$FluidEntry$$Type} from "blusunrize.immersiveengineering.common.register.IEFluids$FluidEntry"

export class $ConcreteFluid extends $IEFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "BUCKET_DISPENSE_BEHAVIOR": $DispenseItemBehavior
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $IEFluids$FluidEntry$$Type)

public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "getFlowingFluidState"(arg0: integer, arg1: boolean, arg2: $FluidState$$Type, arg3: integer): $FluidState
public "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): void
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcreteFluid$$Type = ($ConcreteFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcreteFluid$$Original = $ConcreteFluid;}
declare module "blusunrize.immersiveengineering.common.fluids.PotionFluid$PotionBottleType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"

export class $PotionFluid$PotionBottleType extends $Enum<($PotionFluid$PotionBottleType)> implements $StringRepresentable$$Interface {
static readonly "REGULAR": $PotionFluid$PotionBottleType
static readonly "CODEC": $DualCodec<($ByteBuf), ($PotionFluid$PotionBottleType)>
static readonly "LINGERING": $PotionFluid$PotionBottleType
static readonly "SPLASH": $PotionFluid$PotionBottleType

public static "fromItem"(arg0: $Holder$$Type<($Item)>): $PotionFluid$PotionBottleType
public "getBottleItem"(): $Item
public static "values"(): ($PotionFluid$PotionBottleType)[]
public static "valueOf"(arg0: StringJS): $PotionFluid$PotionBottleType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "bottleItem"(): $Item
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluid$PotionBottleType$$Type = (("regular") | ("splash") | ("lingering"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionFluid$PotionBottleType$$Original = $PotionFluid$PotionBottleType;}
declare module "blusunrize.immersiveengineering.common.fluids.IEFluid" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$FluidType$Properties} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$FlowingFluid} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer} from "java.util.function.Consumer"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Function$$Type} from "java.util.function.Function"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$IEFluids$FluidEntry$$Type} from "blusunrize.immersiveengineering.common.register.IEFluids$FluidEntry"

export class $IEFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "BUCKET_DISPENSE_BEHAVIOR": $DispenseItemBehavior
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $IEFluids$FluidEntry$$Type)

public "canConvertToSource"(arg0: $Level$$Type): boolean
public "isSource"(arg0: $FluidState$$Type): boolean
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "isSame"(arg0: $Fluid$$Type): boolean
public "getFlowing"(): $Fluid
public static "makeFluid"(arg0: $Function$$Type<($IEFluids$FluidEntry), ($IEFluid$$Type)>, arg1: $IEFluids$FluidEntry$$Type): $IEFluid
public "getSource"(): $Fluid
public static "createBuilder"(arg0: integer, arg1: integer): $Consumer<($FluidType$Properties)>
public "getBucket"(): $Item
public "getFluidType"(): $FluidType
public "getAmount"(arg0: $FluidState$$Type): integer
public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
get "flowing"(): $Fluid
get "source"(): $Fluid
get "bucket"(): $Item
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluid$$Type = ($IEFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEFluid$$Original = $IEFluid;}
declare module "blusunrize.immersiveengineering.common.fluids.IEFluid$Flowing" {
import {$ReplacementMatch} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IEFluid} from "blusunrize.immersiveengineering.common.fluids.IEFluid"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$DispenseItemBehavior} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$Holder} from "net.minecraft.core.Holder"
import {$IEFluids$FluidEntry$$Type} from "blusunrize.immersiveengineering.common.register.IEFluids$FluidEntry"

export class $IEFluid$Flowing extends $IEFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "BUCKET_DISPENSE_BEHAVIOR": $DispenseItemBehavior
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(arg0: $IEFluids$FluidEntry$$Type)

public "asHolder"(): $Holder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
public static "wrap"(o: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluid$Flowing$$Type = ($IEFluid$Flowing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEFluid$Flowing$$Original = $IEFluid$Flowing;}
declare module "blusunrize.immersiveengineering.common.fluids.IEFluidBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid} from "net.minecraft.world.level.material.FlowingFluid"
import {$Comparable} from "java.lang.Comparable"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$StateHolder, $StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$IEFluids$FluidEntry$$Type} from "blusunrize.immersiveengineering.common.register.IEFluids$FluidEntry"

export class $IEFluidBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $IEFluids$FluidEntry$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "setEffect"(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer): void
public static "withCopiedValue"<T extends $StateHolder<(object), (object)>, S extends $Comparable<(object)>>(arg0: $Property$$Type<(S)>, arg1: T, arg2: $StateHolder$$Type<(never), (never)>): T
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEFluidBlock$$Type = ($IEFluidBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEFluidBlock$$Original = $IEFluidBlock;}
