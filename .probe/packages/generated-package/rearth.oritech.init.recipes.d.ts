declare module "rearth.oritech.init.recipes.AugmentDataRecipe$ModifierDefinition" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $AugmentDataRecipe$ModifierDefinition extends $Record {
static "ENDEC": $Endec<($AugmentDataRecipe$ModifierDefinition)>

constructor(entityAttributeId: $ResourceLocation$$Type, attributeOperationType: integer, amount: float)

public "attributeOperationType"(): integer
public "entityAttributeId"(): $ResourceLocation
public "amount"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentDataRecipe$ModifierDefinition$$Type = ({"attributeOperationType"?: integer, "entityAttributeId"?: $ResourceLocation$$Type, "amount"?: float}) | ([attributeOperationType?: integer, entityAttributeId?: $ResourceLocation$$Type, amount?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AugmentDataRecipe$ModifierDefinition$$Original = $AugmentDataRecipe$ModifierDefinition;}
declare module "rearth.oritech.init.recipes.AugmentDataRecipe$EffectDefinition" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $AugmentDataRecipe$EffectDefinition extends $Record {
static "ENDEC": $Endec<($AugmentDataRecipe$EffectDefinition)>

constructor(potionEffectId: $ResourceLocation$$Type, effectStrength: integer)

public "potionEffectId"(): $ResourceLocation
public "effectStrength"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentDataRecipe$EffectDefinition$$Type = ({"effectStrength"?: integer, "potionEffectId"?: $ResourceLocation$$Type}) | ([effectStrength?: integer, potionEffectId?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AugmentDataRecipe$EffectDefinition$$Original = $AugmentDataRecipe$EffectDefinition;}
declare module "rearth.oritech.init.recipes.AugmentDataRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$AugmentDataRecipe$ModifierDefinition, $AugmentDataRecipe$ModifierDefinition$$Type} from "rearth.oritech.init.recipes.AugmentDataRecipe$ModifierDefinition"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AugmentDataRecipeType, $AugmentDataRecipeType$$Type} from "rearth.oritech.init.recipes.AugmentDataRecipeType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$AugmentDataRecipe$CustomAugmentDefinition, $AugmentDataRecipe$CustomAugmentDefinition$$Type} from "rearth.oritech.init.recipes.AugmentDataRecipe$CustomAugmentDefinition"
import {$Augment} from "rearth.oritech.block.entity.augmenter.api.Augment"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$AugmentDataRecipe$EffectDefinition, $AugmentDataRecipe$EffectDefinition$$Type} from "rearth.oritech.init.recipes.AugmentDataRecipe$EffectDefinition"
import {$SizedIngredient, $SizedIngredient$$Type} from "rearth.oritech.util.SizedIngredient"

export class $AugmentDataRecipe implements $Recipe$$Interface<($RecipeInput)> {
constructor(arg0: $AugmentDataRecipeType$$Type, arg1: boolean, arg2: $List$$Type<($SizedIngredient$$Type)>, arg3: $List$$Type<($SizedIngredient$$Type)>, arg4: $List$$Type<($ResourceLocation$$Type)>, arg5: $ResourceLocation$$Type, arg6: integer, arg7: integer, arg8: integer, arg9: long, arg10: $AugmentDataRecipe$EffectDefinition$$Type, arg11: $AugmentDataRecipe$ModifierDefinition$$Type, arg12: $AugmentDataRecipe$CustomAugmentDefinition$$Type)
constructor(arg0: $AugmentDataRecipeType$$Type, arg1: boolean, arg2: $List$$Type<($SizedIngredient$$Type)>, arg3: $List$$Type<($SizedIngredient$$Type)>, arg4: $List$$Type<($ResourceLocation$$Type)>, arg5: $ResourceLocation$$Type, arg6: integer, arg7: integer, arg8: integer, arg9: long, arg10: $Either$$Type<($Either$$Type<($AugmentDataRecipe$EffectDefinition$$Type), ($AugmentDataRecipe$ModifierDefinition$$Type)>), ($AugmentDataRecipe$CustomAugmentDefinition$$Type)>)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getRequirements"(): $List<($ResourceLocation)>
public "isToggleable"(): boolean
public "getOriType"(): $AugmentDataRecipeType
public "getRfCost"(): long
public "getResearchCost"(): $List<($SizedIngredient)>
public "getRequiredStation"(): $ResourceLocation
public "getApplyCost"(): $List<($SizedIngredient)>
public "createAugment"(arg0: $ResourceLocation$$Type): $Augment
public "getUiX"(): integer
public "getUiY"(): integer
public "getEffectDefinition"(): $AugmentDataRecipe$EffectDefinition
public "getCustomAugmentDefinition"(): $AugmentDataRecipe$CustomAugmentDefinition
public "getModifierDefinition"(): $AugmentDataRecipe$ModifierDefinition
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getDefinition"(): $Either<($Either<($AugmentDataRecipe$EffectDefinition), ($AugmentDataRecipe$ModifierDefinition)>), ($AugmentDataRecipe$CustomAugmentDefinition)>
public "getTime"(): integer
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
public "isSpecial"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "requirements"(): $List<($ResourceLocation)>
get "toggleable"(): boolean
get "oriType"(): $AugmentDataRecipeType
get "rfCost"(): long
get "researchCost"(): $List<($SizedIngredient)>
get "requiredStation"(): $ResourceLocation
get "applyCost"(): $List<($SizedIngredient)>
get "uiX"(): integer
get "uiY"(): integer
get "effectDefinition"(): $AugmentDataRecipe$EffectDefinition
get "customAugmentDefinition"(): $AugmentDataRecipe$CustomAugmentDefinition
get "modifierDefinition"(): $AugmentDataRecipe$ModifierDefinition
get "type"(): $RecipeType<(never)>
get "definition"(): $Either<($Either<($AugmentDataRecipe$EffectDefinition), ($AugmentDataRecipe$ModifierDefinition)>), ($AugmentDataRecipe$CustomAugmentDefinition)>
get "time"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
get "special"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentDataRecipe$$Type = ($AugmentDataRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AugmentDataRecipe$$Original = $AugmentDataRecipe;}
declare module "rearth.oritech.init.recipes.OritechRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidIngredient, $FluidIngredient$$Type} from "rearth.oritech.util.FluidIngredient"
import {$OritechRecipeType, $OritechRecipeType$$Type} from "rearth.oritech.init.recipes.OritechRecipeType"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $OritechRecipe implements $Recipe$$Interface<($RecipeInput)> {
static readonly "DUMMY": $OritechRecipe

constructor(arg0: integer, arg1: $List$$Type<($Ingredient$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>, arg3: $OritechRecipeType$$Type, arg4: $FluidIngredient$$Type, arg5: $FluidStack$$Type)
constructor(arg0: integer, arg1: $List$$Type<($Ingredient$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>, arg3: $OritechRecipeType$$Type, arg4: $FluidIngredient$$Type, arg5: $List$$Type<($FluidStack$$Type)>)
constructor(arg0: integer, arg1: $List$$Type<($Ingredient$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>, arg3: $OritechRecipeType$$Type, arg4: $Fluid$$Type, arg5: long, arg6: $Fluid$$Type, arg7: long)
constructor(arg0: integer, arg1: $List$$Type<($Ingredient$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>, arg3: $OritechRecipeType$$Type, arg4: $FluidIngredient$$Type, arg5: $Fluid$$Type, arg6: long)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(never)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getOriType"(): $OritechRecipeType
public "getFluidInput"(): $FluidIngredient
public "getFluidOutputs"(): $List<($FluidStack)>
public "getInputs"(): $List<($Ingredient)>
public "toString"(): StringJS
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(never)>
public "getTime"(): integer
public "isSpecial"(): boolean
public "getResults"(): $List<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "oriType"(): $OritechRecipeType
get "fluidInput"(): $FluidIngredient
get "fluidOutputs"(): $List<($FluidStack)>
get "inputs"(): $List<($Ingredient)>
get "type"(): $RecipeType<(never)>
get "time"(): integer
get "special"(): boolean
get "results"(): $List<($ItemStack)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OritechRecipe$$Type = ($OritechRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OritechRecipe$$Original = $OritechRecipe;}
declare module "rearth.oritech.init.recipes.AugmentDataRecipe$CustomAugmentDefinition" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $AugmentDataRecipe$CustomAugmentDefinition extends $Record {
static "ENDEC": $Endec<($AugmentDataRecipe$CustomAugmentDefinition)>

constructor(customAugmentId: $ResourceLocation$$Type)

public "customAugmentId"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentDataRecipe$CustomAugmentDefinition$$Type = ({"customAugmentId"?: $ResourceLocation$$Type}) | ([customAugmentId?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AugmentDataRecipe$CustomAugmentDefinition$$Original = $AugmentDataRecipe$CustomAugmentDefinition;}
declare module "rearth.oritech.init.recipes.AugmentDataRecipeType" {
import {$Endec} from "io.wispforest.endec.Endec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$EndecRecipeSerializer} from "io.wispforest.owo.serialization.EndecRecipeSerializer"
import {$RecipeType, $RecipeType$$Interface} from "net.minecraft.world.item.crafting.RecipeType"
import {$AugmentDataRecipe} from "rearth.oritech.init.recipes.AugmentDataRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $AugmentDataRecipeType extends $EndecRecipeSerializer<($AugmentDataRecipe)> implements $RecipeType$$Interface<($AugmentDataRecipe)> {
static readonly "AUGMENT_DATA_RECIPE_ENDEC": $Endec<($AugmentDataRecipe)>

constructor(arg0: $ResourceLocation$$Type)

public "getIdentifier"(): $ResourceLocation
public static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<($AugmentDataRecipe)>
public static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<($AugmentDataRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "identifier"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentDataRecipeType$$Type = ($AugmentDataRecipeType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AugmentDataRecipeType$$Original = $AugmentDataRecipeType;}
declare module "rearth.oritech.init.recipes.OritechRecipeType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Endec} from "io.wispforest.endec.Endec"
import {$OritechRecipe} from "rearth.oritech.init.recipes.OritechRecipe"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EndecRecipeSerializer} from "io.wispforest.owo.serialization.EndecRecipeSerializer"
import {$RecipeType, $RecipeType$$Interface} from "net.minecraft.world.item.crafting.RecipeType"
import {$FluidStack} from "dev.architectury.fluid.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $OritechRecipeType extends $EndecRecipeSerializer<($OritechRecipe)> implements $RecipeType$$Interface<($OritechRecipe)> {
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($OritechRecipe)>
static readonly "ORI_RECIPE_ENDEC": $Endec<($OritechRecipe)>
static readonly "FLUID_STACK_ENDEC": $Endec<($FluidStack)>

constructor(arg0: $ResourceLocation$$Type)

public "getIdentifier"(): $ResourceLocation
public "toString"(): StringJS
public static "register"<T extends $Recipe<(object)>>(arg0: StringJS): $RecipeType<($OritechRecipe)>
public static "simple"<T extends $Recipe<(object)>>(arg0: $ResourceLocation$$Type): $RecipeType<($OritechRecipe)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
get "identifier"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OritechRecipeType$$Type = ($OritechRecipeType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OritechRecipeType$$Original = $OritechRecipeType;}
