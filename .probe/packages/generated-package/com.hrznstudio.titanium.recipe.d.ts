declare module "com.hrznstudio.titanium.recipe.serializer.CodecRecipeSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Class$$Type} from "java.lang.Class"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $CodecRecipeSerializer<T extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $Class$$Type<(T)>, arg1: $Supplier$$Type<($RecipeType$$Type<(never)>)>, arg2: $MapCodec$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipeSerializer$$Type<T> = ($CodecRecipeSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CodecRecipeSerializer$$Original<T> = $CodecRecipeSerializer<(T)>;}
declare module "com.hrznstudio.titanium.recipe.serializer.GenericSerializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Class$$Type} from "java.lang.Class"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $GenericSerializer<T extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(T)> {
constructor(arg0: $Class$$Type<(T)>, arg1: $Supplier$$Type<($RecipeType$$Type<(never)>)>, arg2: $MapCodec$$Type<(T)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): T
public "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: T): void
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericSerializer$$Type<T> = ($GenericSerializer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericSerializer$$Original<T> = $GenericSerializer<(T)>;}
