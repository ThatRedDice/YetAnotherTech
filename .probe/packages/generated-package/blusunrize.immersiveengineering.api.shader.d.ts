declare module "blusunrize.immersiveengineering.api.shader.CapabilityShader$ShaderWrapper_Direct" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IAttachmentSerializer} from "net.neoforged.neoforge.attachment.IAttachmentSerializer"
import {$CapabilityShader$ShaderWrapper$$Interface} from "blusunrize.immersiveengineering.api.shader.CapabilityShader$ShaderWrapper"
import {$ShaderCase} from "blusunrize.immersiveengineering.api.shader.ShaderCase"

export class $CapabilityShader$ShaderWrapper_Direct implements $CapabilityShader$ShaderWrapper$$Interface {
static readonly "SERIALIZER": $IAttachmentSerializer<($CompoundTag), ($CapabilityShader$ShaderWrapper_Direct)>

constructor(arg0: $ResourceLocation$$Type)

public "getShaderType"(): $ResourceLocation
public "setShader"(arg0: $ResourceLocation$$Type): void
public "getShader"(): $ResourceLocation
public "getCase"(): $ShaderCase
get "shaderType"(): $ResourceLocation
set "shader"(value: $ResourceLocation$$Type)
get "shader"(): $ResourceLocation
get "case"(): $ShaderCase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityShader$ShaderWrapper_Direct$$Type = ($CapabilityShader$ShaderWrapper_Direct);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityShader$ShaderWrapper_Direct$$Original = $CapabilityShader$ShaderWrapper_Direct;}
declare module "blusunrize.immersiveengineering.api.shader.ShaderCase" {
import {$ShaderLayer, $ShaderLayer$$Type} from "blusunrize.immersiveengineering.api.shader.ShaderLayer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Color4, $Color4$$Type} from "blusunrize.immersiveengineering.api.utils.Color4"

export class $ShaderCase {
public "getRenderColor"(arg0: StringJS, arg1: integer, arg2: $Color4$$Type): $Color4
public "getShaderType"(): $ResourceLocation
public "getTextureReplacement"(arg0: StringJS, arg1: integer): $ResourceLocation
public "getLayerInsertionIndex"(): integer
public "shouldRenderGroupForPass"(arg0: StringJS, arg1: integer): boolean
public "stitchIntoSheet"(): boolean
public "getLayers"(): ($ShaderLayer)[]
public "addLayers"(...arg0: ($ShaderLayer$$Type)[]): $ShaderCase
public "addLayers"(arg0: integer, ...arg1: ($ShaderLayer$$Type)[]): $ShaderCase
get "shaderType"(): $ResourceLocation
get "layerInsertionIndex"(): integer
get "layers"(): ($ShaderLayer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderCase$$Type = ($ShaderCase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderCase$$Original = $ShaderCase;}
declare module "blusunrize.immersiveengineering.api.shader.CapabilityShader$ShaderWrapper" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ShaderCase} from "blusunrize.immersiveengineering.api.shader.ShaderCase"

export interface $CapabilityShader$ShaderWrapper$$Interface {
get "shaderType"(): $ResourceLocation
get "case"(): $ShaderCase
set "shader"(value: $ResourceLocation$$Type)
get "shader"(): $ResourceLocation
}

export class $CapabilityShader$ShaderWrapper implements $CapabilityShader$ShaderWrapper$$Interface {
 "getShaderType"(): $ResourceLocation
 "getCase"(): $ShaderCase
 "setShader"(arg0: $ResourceLocation$$Type): void
 "getShader"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityShader$ShaderWrapper$$Type = ($CapabilityShader$ShaderWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapabilityShader$ShaderWrapper$$Original = $CapabilityShader$ShaderWrapper;}
declare module "blusunrize.immersiveengineering.api.shader.IShaderItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $IShaderItem$$Interface {

(): $ResourceLocation$$Type
get "shaderName"(): $ResourceLocation
}

export class $IShaderItem implements $IShaderItem$$Interface {
 "getShaderName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShaderItem$$Type = (() => $ResourceLocation$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IShaderItem$$Original = $IShaderItem;}
declare module "blusunrize.immersiveengineering.api.shader.ShaderLayer" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Color4} from "blusunrize.immersiveengineering.api.utils.Color4"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $ShaderLayer {
constructor(arg0: $ResourceLocation$$Type, arg1: integer)

public "setTextureBounds"(...arg0: (double)[]): $ShaderLayer
public "setCutoutBounds"(...arg0: (double)[]): $ShaderLayer
public "getTextureBounds"(): (double)[]
public "getCutoutBounds"(): (double)[]
public "isDynamicLayer"(): boolean
public "getTexture"(): $ResourceLocation
public "getColor"(): $Color4
public "getRenderType"(arg0: $RenderType$$Type): $RenderType
public "isTranslucent"(): boolean
set "textureBounds"(value: (double)[])
set "cutoutBounds"(value: (double)[])
get "textureBounds"(): (double)[]
get "cutoutBounds"(): (double)[]
get "dynamicLayer"(): boolean
get "texture"(): $ResourceLocation
get "color"(): $Color4
get "translucent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderLayer$$Type = ($ShaderLayer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderLayer$$Original = $ShaderLayer;}
