declare module "net.irisshaders.iris.compat.embeddium.mixin.monocle.mixin.EmbeddiumWorldRendererAssessor" {
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$BlockDestructionProgress$$Type} from "net.minecraft.server.level.BlockDestructionProgress"
import {$RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$SortedSet$$Type} from "java.util.SortedSet"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export interface $EmbeddiumWorldRendererAssessor$$Interface {
}

export class $EmbeddiumWorldRendererAssessor implements $EmbeddiumWorldRendererAssessor$$Interface {
 "invokeRenderBlockEntities"(arg0: $PoseStack$$Type, arg1: $RenderBuffers$$Type, arg2: $Long2ObjectMap$$Type<($SortedSet$$Type<($BlockDestructionProgress$$Type)>)>, arg3: float, arg4: $MultiBufferSource$BufferSource$$Type, arg5: double, arg6: double, arg7: double, arg8: $BlockEntityRenderDispatcher$$Type): void
 "invokeRenderGlobalBlockEntities"(arg0: $PoseStack$$Type, arg1: $RenderBuffers$$Type, arg2: $Long2ObjectMap$$Type<($SortedSet$$Type<($BlockDestructionProgress$$Type)>)>, arg3: float, arg4: $MultiBufferSource$BufferSource$$Type, arg5: double, arg6: double, arg7: double, arg8: $BlockEntityRenderDispatcher$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmbeddiumWorldRendererAssessor$$Type = ($EmbeddiumWorldRendererAssessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmbeddiumWorldRendererAssessor$$Original = $EmbeddiumWorldRendererAssessor;}
