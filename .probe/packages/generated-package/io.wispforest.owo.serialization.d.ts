declare module "io.wispforest.owo.serialization.OwoComponentTypeBuilder" {
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$DataComponentType$Builder} from "net.minecraft.core.component.DataComponentType$Builder"
import {$SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $OwoComponentTypeBuilder$$Interface<T> {
}

export class $OwoComponentTypeBuilder<T> implements $OwoComponentTypeBuilder$$Interface {
 "endec"(endec: $Endec$$Type<(T)>): $DataComponentType$Builder<(T)>
 "endec"(endec: $Endec$$Type<(T)>, assumedContext: $SerializationContext$$Type): $DataComponentType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoComponentTypeBuilder$$Type<T> = ($OwoComponentTypeBuilder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OwoComponentTypeBuilder$$Original<T> = $OwoComponentTypeBuilder<(T)>;}
declare module "io.wispforest.owo.serialization.EndecRecipeSerializer" {
import {$StructEndec$$Type} from "io.wispforest.endec.StructEndec"
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EndecRecipeSerializer<R extends $Recipe<(object)>> implements $RecipeSerializer$$Interface<(R)> {
constructor(endec: $StructEndec$$Type<(R)>, networkEndec: $Endec$$Type<(R)>)
constructor(endec: $StructEndec$$Type<(R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndecRecipeSerializer$$Type<R> = ($EndecRecipeSerializer<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EndecRecipeSerializer$$Original<R> = $EndecRecipeSerializer<(R)>;}
