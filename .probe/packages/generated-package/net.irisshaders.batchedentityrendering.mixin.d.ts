declare module "net.irisshaders.batchedentityrendering.mixin.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor$$Interface {

(): boolean
}

export class $RenderTypeAccessor implements $RenderTypeAccessor$$Interface {
 "shouldSortOnUpload"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTypeAccessor$$Original = $RenderTypeAccessor;}
declare module "net.irisshaders.batchedentityrendering.mixin.RenderStateShardAccessor" {
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export interface $RenderStateShardAccessor$$Interface {
public static get "NO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "GLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "CRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
}

export class $RenderStateShardAccessor implements $RenderStateShardAccessor$$Interface {
static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$$Type = ($RenderStateShardAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShardAccessor$$Original = $RenderStateShardAccessor;}
declare module "net.irisshaders.batchedentityrendering.mixin.CompositeStateAccessor" {
import {$RenderStateShard$TransparencyStateShard, $RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export interface $CompositeStateAccessor$$Interface {

(): $RenderStateShard$TransparencyStateShard$$Type
get "transparency"(): $RenderStateShard$TransparencyStateShard
}

export class $CompositeStateAccessor implements $CompositeStateAccessor$$Interface {
 "getTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeStateAccessor$$Type = (() => $RenderStateShard$TransparencyStateShard$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompositeStateAccessor$$Original = $CompositeStateAccessor;}
declare module "net.irisshaders.batchedentityrendering.mixin.BufferSourceAccessor" {
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $BufferSourceAccessor$$Interface {

(): $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>
get "fixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
}

export class $BufferSourceAccessor implements $BufferSourceAccessor$$Interface {
 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferSourceAccessor$$Type = (() => $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BufferSourceAccessor$$Original = $BufferSourceAccessor;}
declare module "net.irisshaders.batchedentityrendering.mixin.SectionBufferBuilderPackAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $SectionBufferBuilderPackAccessor$$Interface {

(): $Map$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>
get "buffers"(): $Map<($RenderType), ($ByteBufferBuilder)>
}

export class $SectionBufferBuilderPackAccessor implements $SectionBufferBuilderPackAccessor$$Interface {
 "getBuffers"(): $Map<($RenderType), ($ByteBufferBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionBufferBuilderPackAccessor$$Type = (() => $Map$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionBufferBuilderPackAccessor$$Original = $SectionBufferBuilderPackAccessor;}
declare module "net.irisshaders.batchedentityrendering.mixin.OutlineBufferSourceAccessor" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export interface $OutlineBufferSourceAccessor$$Interface {

(): $MultiBufferSource$BufferSource$$Type
get "outlineBufferSource"(): $MultiBufferSource$BufferSource
}

export class $OutlineBufferSourceAccessor implements $OutlineBufferSourceAccessor$$Interface {
 "getOutlineBufferSource"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutlineBufferSourceAccessor$$Type = (() => $MultiBufferSource$BufferSource$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutlineBufferSourceAccessor$$Original = $OutlineBufferSourceAccessor;}
