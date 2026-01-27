declare module "com.simibubi.create.AllFluids$TintedFluidType" {
import {$FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$Lazy} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType} from "net.neoforged.neoforge.fluids.FluidType"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AllFluids$TintedFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor(arg0: $FluidType$Properties$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type)

public "initializeClient"(arg0: $Consumer$$Type<($IClientFluidTypeExtensions)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllFluids$TintedFluidType$$Type = ($AllFluids$TintedFluidType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AllFluids$TintedFluidType$$Original = $AllFluids$TintedFluidType;}
declare module "com.simibubi.create.AllFluids$SolidRenderedPlaceableFluidType" {
import {$AllFluids$TintedFluidType} from "com.simibubi.create.AllFluids$TintedFluidType"
import {$Lazy} from "net.neoforged.neoforge.common.util.Lazy"

export class $AllFluids$SolidRenderedPlaceableFluidType extends $AllFluids$TintedFluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllFluids$SolidRenderedPlaceableFluidType$$Type = ($AllFluids$SolidRenderedPlaceableFluidType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AllFluids$SolidRenderedPlaceableFluidType$$Original = $AllFluids$SolidRenderedPlaceableFluidType;}
declare module "com.simibubi.create.AllRecipeTypes" {
import {$Optional} from "java.util.Optional"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate} from "java.util.function.Predicate"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IRecipeTypeInfo$$Interface} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AllRecipeTypes extends $Enum<($AllRecipeTypes)> implements $IRecipeTypeInfo$$Interface, $StringRepresentable$$Interface {
static readonly "MILLING": $AllRecipeTypes
static readonly "MECHANICAL_CRAFTING": $AllRecipeTypes
static readonly "CAN_BE_AUTOMATED": $Predicate<($RecipeHolder<(never)>)>
static readonly "CODEC": $Codec<($AllRecipeTypes)>
static readonly "CUTTING": $AllRecipeTypes
static readonly "SANDPAPER_POLISHING": $AllRecipeTypes
static readonly "CONVERSION": $AllRecipeTypes
static readonly "ITEM_COPYING": $AllRecipeTypes
static readonly "FILLING": $AllRecipeTypes
static readonly "HAUNTING": $AllRecipeTypes
static readonly "EMPTYING": $AllRecipeTypes
static readonly "CRUSHING": $AllRecipeTypes
readonly "serializerSupplier": $Supplier<($RecipeSerializer<(never)>)>
static readonly "PRESSING": $AllRecipeTypes
static readonly "ITEM_APPLICATION": $AllRecipeTypes
static readonly "MIXING": $AllRecipeTypes
static readonly "SEQUENCED_ASSEMBLY": $AllRecipeTypes
static readonly "BASIN": $AllRecipeTypes
static readonly "COMPACTING": $AllRecipeTypes
readonly "id": $ResourceLocation
static readonly "SPLASHING": $AllRecipeTypes
static readonly "DEPLOYING": $AllRecipeTypes
static readonly "TOOLBOX_DYEING": $AllRecipeTypes

public static "shouldIgnoreInAutomation"(arg0: $RecipeHolder$$Type<(never)>): boolean
public "getSerializer"<T extends $RecipeSerializer<(object)>>(): T
public static "values"(): ($AllRecipeTypes)[]
public static "valueOf"(arg0: StringJS): $AllRecipeTypes
public static "register"(arg0: $IEventBus$$Type): void
public "find"<I extends $RecipeInput, R extends $Recipe<(object)>>(arg0: I, arg1: $Level$$Type): $Optional<($RecipeHolder<(R)>)>
public "getId"(): $ResourceLocation
public "getType"<I extends $RecipeInput, R extends $Recipe<(object)>>(): $RecipeType<(R)>
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializer"(): T
get "type"(): $RecipeType<(R)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllRecipeTypes$$Type = (("create:conversion") | ("create:crushing") | ("create:cutting") | ("create:milling") | ("create:basin") | ("create:mixing") | ("create:compacting") | ("create:pressing") | ("create:sandpaper_polishing") | ("create:splashing") | ("create:haunting") | ("create:deploying") | ("create:filling") | ("create:emptying") | ("create:item_application") | ("create:mechanical_crafting") | ("create:sequenced_assembly") | ("create:toolbox_dyeing") | ("create:item_copying"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AllRecipeTypes$$Original = $AllRecipeTypes;}
