declare module "dan200.computercraft.api.client.turtle.RegisterTurtleUpgradeModeller" {
import {$TurtleUpgradeModeller, $TurtleUpgradeModeller$$Type} from "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller"
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export interface $RegisterTurtleUpgradeModeller$$Interface {

(arg0: $UpgradeType<(T)>, arg1: $TurtleUpgradeModeller<(T)>): void
}

export class $RegisterTurtleUpgradeModeller implements $RegisterTurtleUpgradeModeller$$Interface {
 "register"<T extends $ITurtleUpgrade>(arg0: $UpgradeType$$Type<(T)>, arg1: $TurtleUpgradeModeller$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterTurtleUpgradeModeller$$Type = ((arg0: $UpgradeType<(T)>, arg1: $TurtleUpgradeModeller<(T)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterTurtleUpgradeModeller$$Original = $RegisterTurtleUpgradeModeller;}
declare module "dan200.computercraft.api.client.turtle.RegisterTurtleModellersEvent" {
import {$TurtleUpgradeModeller$$Type} from "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller"
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$Event} from "net.neoforged.bus.api.Event"
import {$RegisterTurtleUpgradeModeller$$Type, $RegisterTurtleUpgradeModeller$$Interface} from "dan200.computercraft.api.client.turtle.RegisterTurtleUpgradeModeller"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $RegisterTurtleModellersEvent extends $Event implements $IModBusEvent$$Interface, $RegisterTurtleUpgradeModeller$$Interface {
constructor(arg0: $RegisterTurtleUpgradeModeller$$Type)

public "register"<T extends $ITurtleUpgrade>(arg0: $UpgradeType$$Type<(T)>, arg1: $TurtleUpgradeModeller$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterTurtleModellersEvent$$Type = ($RegisterTurtleModellersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterTurtleModellersEvent$$Original = $RegisterTurtleModellersEvent;}
declare module "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelLocation$$Type} from "dan200.computercraft.api.client.ModelLocation"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$Stream} from "java.util.stream.Stream"
import {$TransformedModel, $TransformedModel$$Type} from "dan200.computercraft.api.client.TransformedModel"

export interface $TurtleUpgradeModeller$$Interface<T extends $ITurtleUpgrade> {

(arg0: T, arg1: $ITurtleAccess, arg2: $TurtleSide, arg3: $DataComponentPatch): $TransformedModel$$Type
get "dependencies"(): $Stream<($ResourceLocation)>
}

export class $TurtleUpgradeModeller<T extends $ITurtleUpgrade> implements $TurtleUpgradeModeller$$Interface {
static "sided"<T extends $ITurtleUpgrade>(arg0: $ModelLocation$$Type, arg1: $ModelLocation$$Type): $TurtleUpgradeModeller<(T)>
static "sided"<T extends $ITurtleUpgrade>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $TurtleUpgradeModeller<(T)>
static "flatItem"<T extends $ITurtleUpgrade>(): $TurtleUpgradeModeller<(T)>
 "getDependencies"(): $Stream<($ResourceLocation)>
 "getModel"(arg0: T, arg1: $ITurtleAccess$$Type, arg2: $TurtleSide$$Type, arg3: $DataComponentPatch$$Type): $TransformedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleUpgradeModeller$$Type<T> = ((arg0: T, arg1: $ITurtleAccess, arg2: $TurtleSide, arg3: $DataComponentPatch) => $TransformedModel$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurtleUpgradeModeller$$Original<T> = $TurtleUpgradeModeller<(T)>;}
declare module "dan200.computercraft.api.client.ModelLocation" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Stream} from "java.util.stream.Stream"
import {$ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"

export class $ModelLocation {
public static "ofModel"(arg0: $ModelResourceLocation$$Type): $ModelLocation
public static "ofResource"(arg0: $ResourceLocation$$Type): $ModelLocation
public "getDependencies"(): $Stream<($ResourceLocation)>
public "getModel"(arg0: $ModelManager$$Type): $BakedModel
get "dependencies"(): $Stream<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLocation$$Type = ($ModelLocation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelLocation$$Original = $ModelLocation;}
declare module "dan200.computercraft.api.client.TransformedModel" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ModelLocation$$Type} from "dan200.computercraft.api.client.ModelLocation"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Record} from "java.lang.Record"

export class $TransformedModel extends $Record {
constructor(arg0: $BakedModel$$Type)
constructor(model: $BakedModel$$Type, matrix: $Transformation$$Type)

public "model"(): $BakedModel
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $ModelLocation$$Type): $TransformedModel
public static "of"(arg0: $ModelResourceLocation$$Type): $TransformedModel
public static "of"(arg0: $ResourceLocation$$Type): $TransformedModel
public static "of"(arg0: $ItemStack$$Type, arg1: $Transformation$$Type): $TransformedModel
public "matrix"(): $Transformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformedModel$$Type = ({"model"?: $BakedModel$$Type, "matrix"?: $Transformation$$Type}) | ([model?: $BakedModel$$Type, matrix?: $Transformation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformedModel$$Original = $TransformedModel;}
