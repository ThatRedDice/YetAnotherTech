declare module "dev.technici4n.moderndynamics.thirdparty.fabric.QuadView" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction} from "net.minecraft.core.Direction"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$MutableQuadView$$Type} from "dev.technici4n.moderndynamics.thirdparty.fabric.MutableQuadView"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $QuadView$$Interface {
}

export class $QuadView implements $QuadView$$Interface {
static readonly "VANILLA_QUAD_STRIDE": integer
static readonly "VANILLA_VERTEX_STRIDE": integer

 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "colorIndex"(): integer
 "faceNormal"(): $Vector3f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "tag"(): integer
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "nominalFace"(): $Direction
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "toBlockBakedQuad"(): $BakedQuad
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "color"(arg0: integer): integer
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "lightmap"(arg0: integer): integer
 "normalZ"(arg0: integer): float
 "hasNormal"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadView$$Type = ($QuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadView$$Original = $QuadView;}
declare module "dev.technici4n.moderndynamics.thirdparty.fabric.SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$$Type} from "dev.technici4n.moderndynamics.thirdparty.fabric.SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess$$Interface {

(): $SpriteFinderImpl$$Type
}

export class $SpriteFinderImpl$SpriteFinderAccess implements $SpriteFinderImpl$SpriteFinderAccess$$Interface {
 "fabric_spriteFinder"(): $SpriteFinderImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$$Type = (() => $SpriteFinderImpl$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$$Original = $SpriteFinderImpl$SpriteFinderAccess;}
declare module "dev.technici4n.moderndynamics.thirdparty.fabric.SpriteFinderImpl" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map$$Type} from "java.util.Map"
import {$QuadView$$Type} from "dev.technici4n.moderndynamics.thirdparty.fabric.QuadView"
import {$SpriteFinder$$Interface} from "dev.technici4n.moderndynamics.thirdparty.fabric.SpriteFinder"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"

export class $SpriteFinderImpl implements $SpriteFinder$$Interface {
constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, arg1: $TextureAtlas$$Type)

public static "get"(arg0: $TextureAtlas$$Type): $SpriteFinderImpl
public "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
public "find"(arg0: float, arg1: float): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$$Type = ($SpriteFinderImpl);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinderImpl$$Original = $SpriteFinderImpl;}
declare module "dev.technici4n.moderndynamics.thirdparty.fabric.SpriteFinder" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$QuadView$$Type} from "dev.technici4n.moderndynamics.thirdparty.fabric.QuadView"
import {$TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"

export interface $SpriteFinder$$Interface {
}

export class $SpriteFinder implements $SpriteFinder$$Interface {
static "get"(arg0: $TextureAtlas$$Type): $SpriteFinder
 "find"(arg0: $QuadView$$Type): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinder$$Type = ($SpriteFinder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteFinder$$Original = $SpriteFinder;}
declare module "dev.technici4n.moderndynamics.thirdparty.fabric.MutableQuadView" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$QuadView$$Interface} from "dev.technici4n.moderndynamics.thirdparty.fabric.QuadView"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Vector2f, $Vector2f$$Type} from "org.joml.Vector2f"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $MutableQuadView$$Interface extends $QuadView$$Interface {
public static get "instance"(): $MutableQuadView
}

export class $MutableQuadView implements $MutableQuadView$$Interface {
static readonly "BAKE_LOCK_UV": integer
static readonly "BAKE_NORMALIZED": integer
static readonly "BAKE_FLIP_V": integer
static readonly "BAKE_ROTATE_90": integer
static readonly "BAKE_FLIP_U": integer
static readonly "BAKE_ROTATE_NONE": integer
static readonly "BAKE_ROTATE_180": integer
static readonly "BAKE_ROTATE_270": integer

 "fromVanilla"(arg0: $BakedQuad$$Type, arg1: $Direction$$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: $Vector2f$$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "normal"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "nominalFace"(arg0: $Direction$$Type): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$$Type, arg1: integer): $MutableQuadView
static "getInstance"(): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "pos"(arg0: integer, arg1: $Vector3f$$Type): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "colorIndex"(): integer
 "faceNormal"(): $Vector3f
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
 "copyTo"(arg0: $MutableQuadView$$Type): void
 "tag"(): integer
 "toBakedQuad"(arg0: $TextureAtlasSprite$$Type): $BakedQuad
 "posByIndex"(arg0: integer, arg1: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$$Type): $Vector2f
 "nominalFace"(): $Direction
 "copyNormal"(arg0: integer, arg1: $Vector3f$$Type): $Vector3f
 "toBlockBakedQuad"(): $BakedQuad
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "color"(arg0: integer): integer
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "lightmap"(arg0: integer): integer
 "normalZ"(arg0: integer): float
 "hasNormal"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableQuadView$$Type = ($MutableQuadView);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MutableQuadView$$Original = $MutableQuadView;}
