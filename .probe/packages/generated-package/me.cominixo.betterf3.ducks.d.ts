declare module "me.cominixo.betterf3.ducks.ChunkBuilderAccess" {
import {$Queue} from "java.util.Queue"
import {$Runnable} from "java.lang.Runnable"

export interface $ChunkBuilderAccess$$Interface {
}

export class $ChunkBuilderAccess implements $ChunkBuilderAccess$$Interface {
 "betterF3$getQueuedTaskCount"(): integer
 "betterF3$getUploadQueue"(): $Queue<($Runnable)>
 "betterF3$getBufferCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderAccess$$Type = ($ChunkBuilderAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkBuilderAccess$$Original = $ChunkBuilderAccess;}
declare module "me.cominixo.betterf3.ducks.ClientChunkManagerAccess" {
import {$ClientChunkCache$Storage, $ClientChunkCache$Storage$$Type} from "net.minecraft.client.multiplayer.ClientChunkCache$Storage"

export interface $ClientChunkManagerAccess$$Interface {

(): $ClientChunkCache$Storage$$Type
get "chunks"(): $ClientChunkCache$Storage
}

export class $ClientChunkManagerAccess implements $ClientChunkManagerAccess$$Interface {
 "getChunks"(): $ClientChunkCache$Storage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkManagerAccess$$Type = (() => $ClientChunkCache$Storage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChunkManagerAccess$$Original = $ClientChunkManagerAccess;}
declare module "me.cominixo.betterf3.ducks.ClientChunkMapAccess" {
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$AtomicReferenceArray, $AtomicReferenceArray$$Type} from "java.util.concurrent.atomic.AtomicReferenceArray"

export interface $ClientChunkMapAccess$$Interface {

(): $AtomicReferenceArray$$Type<($LevelChunk$$Type)>
get "chunks"(): $AtomicReferenceArray<($LevelChunk)>
}

export class $ClientChunkMapAccess implements $ClientChunkMapAccess$$Interface {
 "getChunks"(): $AtomicReferenceArray<($LevelChunk)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkMapAccess$$Type = (() => $AtomicReferenceArray$$Type<($LevelChunk$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientChunkMapAccess$$Original = $ClientChunkMapAccess;}
