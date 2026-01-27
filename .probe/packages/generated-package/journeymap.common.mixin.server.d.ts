declare module "journeymap.common.mixin.server.ChunkMapAccessor" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"

export interface $ChunkMapAccessor$$Interface {

(): $Iterable$$Type<($ChunkHolder$$Type)>
}

export class $ChunkMapAccessor implements $ChunkMapAccessor$$Interface {
 "invokeGetChunks"(): $Iterable<($ChunkHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccessor$$Type = (() => $Iterable$$Type<($ChunkHolder$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkMapAccessor$$Original = $ChunkMapAccessor;}
declare module "journeymap.common.mixin.server.ServerChunkCacheAccessor" {
import {$ChunkMap, $ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"

export interface $ServerChunkCacheAccessor$$Interface {

(): $ChunkMap$$Type
get "chunkMap"(): $ChunkMap
}

export class $ServerChunkCacheAccessor implements $ServerChunkCacheAccessor$$Interface {
 "getChunkMap"(): $ChunkMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkCacheAccessor$$Type = (() => $ChunkMap$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerChunkCacheAccessor$$Original = $ServerChunkCacheAccessor;}
