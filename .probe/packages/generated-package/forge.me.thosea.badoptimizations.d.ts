declare module "forge.me.thosea.badoptimizations.mixin.accessors.GameRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRendererAccessor$$Interface {

(): float
}

export class $GameRendererAccessor implements $GameRendererAccessor$$Interface {
 "bo$getSkyDarkness"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$$Type = (() => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRendererAccessor$$Original = $GameRendererAccessor;}
declare module "forge.me.thosea.badoptimizations.mixin.accessors.PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor$$Interface {

(): integer
}

export class $PlayerAccessor implements $PlayerAccessor$$Interface {
 "bo$underwaterVisibilityTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAccessor$$Original = $PlayerAccessor;}
declare module "forge.me.thosea.badoptimizations.interfaces.BlockEntityTypeMethods" {
import {$BlockEntityRenderer, $BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityTypeMethods$$Interface {
}

export class $BlockEntityTypeMethods implements $BlockEntityTypeMethods$$Interface {
 "bo$setRenderer"(arg0: $BlockEntityRenderer$$Type<(never)>): void
 "bo$getRenderer"<T extends $BlockEntity>(): $BlockEntityRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeMethods$$Type = ($BlockEntityTypeMethods);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityTypeMethods$$Original = $BlockEntityTypeMethods;}
declare module "forge.me.thosea.badoptimizations.interfaces.EntityTypeMethods" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"

export interface $EntityTypeMethods$$Interface {
}

export class $EntityTypeMethods implements $EntityTypeMethods$$Interface {
 "bo$setRenderer"(arg0: $EntityRenderer$$Type<(never)>): void
 "bo$getRenderer"(): $EntityRenderer<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTypeMethods$$Type = ($EntityTypeMethods);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTypeMethods$$Original = $EntityTypeMethods;}
declare module "forge.me.thosea.badoptimizations.interfaces.EntityMethods" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$Entity} from "net.minecraft.world.entity.Entity"

export interface $EntityMethods$$Interface {
}

export class $EntityMethods implements $EntityMethods$$Interface {
 "bo$getRenderer"<T extends $Entity>(): $EntityRenderer<(T)>
 "bo$refreshEntityData"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMethods$$Type = ($EntityMethods);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityMethods$$Original = $EntityMethods;}
