declare module "ca.spottedleaf.starlight.common.light.StarLightInterface$LightQueue$ChunkTasks" {
import {$ShortOpenHashSet} from "it.unimi.dsi.fastutil.shorts.ShortOpenHashSet"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$List} from "java.util.List"
import {$Set} from "java.util.Set"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $StarLightInterface$LightQueue$ChunkTasks {
 "lightTasks": $List<($Runnable)>
 "queuedEdgeChecksBlock": $ShortOpenHashSet
readonly "onComplete": $CompletableFuture<(void)>
 "changedSectionSet": (boolean)[]
readonly "chunkCoordinate": long
 "queuedEdgeChecksSky": $ShortOpenHashSet
 "isTicketAdded": boolean
readonly "changedPositions": $Set<($BlockPos)>

constructor(chunkCoordinate: long)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarLightInterface$LightQueue$ChunkTasks$$Type = ($StarLightInterface$LightQueue$ChunkTasks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StarLightInterface$LightQueue$ChunkTasks$$Original = $StarLightInterface$LightQueue$ChunkTasks;}
declare module "ca.spottedleaf.starlight.common.light.SWMRNibbleArray" {
import {$SWMRNibbleArray$SaveState} from "ca.spottedleaf.starlight.common.light.SWMRNibbleArray$SaveState"
import {$DataLayer, $DataLayer$$Type} from "net.minecraft.world.level.chunk.DataLayer"

export class $SWMRNibbleArray {
static readonly "ARRAY_SIZE": integer

constructor(bytes: (byte)[], isNullNibble: boolean)
constructor(bytes: (byte)[])
constructor()
constructor(bytes: (byte)[], state: integer)

public "setZero"(): void
public static "fromVanilla"(nibble: $DataLayer$$Type): $SWMRNibbleArray
public "setFull"(): void
public "toVanillaNibble"(): $DataLayer
public "isNullNibbleVisible"(): boolean
public "updateVisible"(): boolean
public "getUpdating"(x: integer, y: integer, z: integer): integer
public "getUpdating"(index: integer): integer
public "isInitialisedUpdating"(): boolean
public "getSaveState"(): $SWMRNibbleArray$SaveState
public "extrudeLower"(other: $SWMRNibbleArray$$Type): void
public "setUninitialised"(): void
public "setNonNull"(): void
public "setNull"(): void
public "isNullNibbleUpdating"(): boolean
public "isUninitialisedUpdating"(): boolean
public "isUninitialisedVisible"(): boolean
public "isInitialisedVisible"(): boolean
public "isHiddenUpdating"(): boolean
public "isHiddenVisible"(): boolean
public "setHidden"(): void
public "isDirty"(): boolean
public "toString"(): StringJS
public "set"(index: integer, value: integer): void
public "set"(x: integer, y: integer, z: integer, value: integer): void
public "getVisible"(index: integer): integer
public "getVisible"(x: integer, y: integer, z: integer): integer
get "zero"(): void
get "full"(): void
get "nullNibbleVisible"(): boolean
get "initialisedUpdating"(): boolean
get "saveState"(): $SWMRNibbleArray$SaveState
get "uninitialised"(): void
get "nonNull"(): void
get "null"(): void
get "nullNibbleUpdating"(): boolean
get "uninitialisedUpdating"(): boolean
get "uninitialisedVisible"(): boolean
get "initialisedVisible"(): boolean
get "hiddenUpdating"(): boolean
get "hiddenVisible"(): boolean
get "hidden"(): void
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SWMRNibbleArray$$Type = ($SWMRNibbleArray);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SWMRNibbleArray$$Original = $SWMRNibbleArray;}
declare module "ca.spottedleaf.starlight.common.light.StarLightInterface" {
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LayerLightEventListener} from "net.minecraft.world.level.lighting.LayerLightEventListener"
import {$TicketType} from "net.minecraft.server.level.TicketType"
import {$Level} from "net.minecraft.world.level.Level"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$LightChunkGetter, $LightChunkGetter$$Type} from "net.minecraft.world.level.chunk.LightChunkGetter"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ShortCollection$$Type} from "it.unimi.dsi.fastutil.shorts.ShortCollection"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Set$$Type} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StarLightInterface$LightQueue$ChunkTasks} from "ca.spottedleaf.starlight.common.light.StarLightInterface$LightQueue$ChunkTasks"

export class $StarLightInterface {
static readonly "CHUNK_WORK_TICKET": $TicketType<($ChunkPos)>
readonly "lightEngine": $LevelLightEngine

constructor(lightAccess: $LightChunkGetter$$Type, hasSkyLight: boolean, hasBlockLight: boolean, lightEngine: $LevelLightEngine$$Type)

public "getLightAccess"(): $LightChunkGetter
public "lightChunk"(chunk: $ChunkAccess$$Type, emptySections: (boolean)[]): void
public "isQueueDirty"(): boolean
public "scheduleChunkLight"(pos: $ChunkPos$$Type, run: $Runnable$$Type): void
public "forceLoadInChunk"(chunk: $ChunkAccess$$Type, emptySections: (boolean)[]): void
public "checkChunkEdges"(chunkX: integer, chunkZ: integer): void
public "hasBlockLight"(): boolean
public "blockChange"(pos: $BlockPos$$Type): $StarLightInterface$LightQueue$ChunkTasks
public "propagateChanges"(): void
public "sectionChange"(pos: $SectionPos$$Type, newEmptyValue: boolean): $StarLightInterface$LightQueue$ChunkTasks
public "getBlockReader"(): $LayerLightEventListener
public "getSkyReader"(): $LayerLightEventListener
public "hasSectionBlockLight"(sectionPos: $SectionPos$$Type): boolean
public "hasSectionSkyLight"(sectionPos: $SectionPos$$Type): boolean
public "getAnyChunkNow"(chunkX: integer, chunkZ: integer): $ChunkAccess
public "getWorld"(): $Level
public "getSkyLightValue"(blockPos: $BlockPos$$Type, chunk: $ChunkAccess$$Type): integer
public "getBlockLightValue"(blockPos: $BlockPos$$Type, chunk: $ChunkAccess$$Type): integer
public "loadInChunk"(chunkX: integer, chunkZ: integer, emptySections: (boolean)[]): void
public "relightChunks"(chunks: $Set$$Type<($ChunkPos$$Type)>, chunkLightCallback: $Consumer$$Type<($ChunkPos)>, onComplete: $IntConsumer$$Type): void
public "checkSkyEdges"(chunkX: integer, chunkZ: integer): void
public "checkSkyEdges"(chunkX: integer, chunkZ: integer, sections: $ShortCollection$$Type): void
public "checkBlockEdges"(chunkX: integer, chunkZ: integer, sections: $ShortCollection$$Type): void
public "checkBlockEdges"(chunkX: integer, chunkZ: integer): void
public "removeChunkTasks"(pos: $ChunkPos$$Type): void
public "hasUpdates"(): boolean
public "isClientSide"(): boolean
public "hasSkyLight"(): boolean
public "getRawBrightness"(pos: $BlockPos$$Type, ambientDarkness: integer): integer
get "lightAccess"(): $LightChunkGetter
get "queueDirty"(): boolean
get "blockReader"(): $LayerLightEventListener
get "skyReader"(): $LayerLightEventListener
get "world"(): $Level
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarLightInterface$$Type = ($StarLightInterface);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StarLightInterface$$Original = $StarLightInterface;}
declare module "ca.spottedleaf.starlight.common.light.SWMRNibbleArray$SaveState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SWMRNibbleArray$SaveState {
readonly "data": (byte)[]
readonly "state": integer

constructor(data: (byte)[], state: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SWMRNibbleArray$SaveState$$Type = ($SWMRNibbleArray$SaveState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SWMRNibbleArray$SaveState$$Original = $SWMRNibbleArray$SaveState;}
declare module "ca.spottedleaf.starlight.common.light.StarLightLightingProvider" {
import {$StarLightInterface} from "ca.spottedleaf.starlight.common.light.StarLightInterface"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$DataLayer$$Type} from "net.minecraft.world.level.chunk.DataLayer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $StarLightLightingProvider$$Interface {
get "lightEngine"(): $StarLightInterface
}

export class $StarLightLightingProvider implements $StarLightLightingProvider$$Interface {
 "clientUpdateLight"(arg0: $LightLayer$$Type, arg1: $SectionPos$$Type, arg2: $DataLayer$$Type, arg3: boolean): void
 "clientRemoveLightData"(arg0: $ChunkPos$$Type): void
 "clientChunkLoad"(arg0: $ChunkPos$$Type, arg1: $LevelChunk$$Type): void
 "getLightEngine"(): $StarLightInterface
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarLightLightingProvider$$Type = ($StarLightLightingProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StarLightLightingProvider$$Original = $StarLightLightingProvider;}
declare module "ca.spottedleaf.starlight.common.blockstate.ExtendedAbstractBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedAbstractBlockState$$Interface {
get "opacityIfCached"(): integer
get "conditionallyFullOpaque"(): boolean
}

export class $ExtendedAbstractBlockState implements $ExtendedAbstractBlockState$$Interface {
 "getOpacityIfCached"(): integer
 "isConditionallyFullOpaque"(): boolean
 "scalablelux$actuallyDynamicLightEmission"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedAbstractBlockState$$Type = ($ExtendedAbstractBlockState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedAbstractBlockState$$Original = $ExtendedAbstractBlockState;}
declare module "ca.spottedleaf.starlight.common.chunk.ExtendedChunk" {
import {$SWMRNibbleArray, $SWMRNibbleArray$$Type} from "ca.spottedleaf.starlight.common.light.SWMRNibbleArray"

export interface $ExtendedChunk$$Interface {
get "blockNibbles"(): ($SWMRNibbleArray)[]
set "blockNibbles"(value: ($SWMRNibbleArray$$Type)[])
get "skyNibbles"(): ($SWMRNibbleArray)[]
set "skyNibbles"(value: ($SWMRNibbleArray$$Type)[])
get "skyEmptinessMap"(): (boolean)[]
set "skyEmptinessMap"(value: (boolean)[])
get "blockEmptinessMap"(): (boolean)[]
set "blockEmptinessMap"(value: (boolean)[])
}

export class $ExtendedChunk implements $ExtendedChunk$$Interface {
 "getBlockNibbles"(): ($SWMRNibbleArray)[]
 "setBlockNibbles"(arg0: ($SWMRNibbleArray$$Type)[]): void
 "getSkyNibbles"(): ($SWMRNibbleArray)[]
 "setSkyNibbles"(arg0: ($SWMRNibbleArray$$Type)[]): void
 "getSkyEmptinessMap"(): (boolean)[]
 "setSkyEmptinessMap"(arg0: (boolean)[]): void
 "getBlockEmptinessMap"(): (boolean)[]
 "setBlockEmptinessMap"(arg0: (boolean)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedChunk$$Type = ($ExtendedChunk);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedChunk$$Original = $ExtendedChunk;}
declare module "ca.spottedleaf.starlight.common.world.ExtendedWorld" {
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"

export interface $ExtendedWorld$$Interface {
}

export class $ExtendedWorld implements $ExtendedWorld$$Interface {
 "getChunkAtImmediately"(arg0: integer, arg1: integer): $LevelChunk
 "getAnyChunkImmediately"(arg0: integer, arg1: integer): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedWorld$$Type = ($ExtendedWorld);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedWorld$$Original = $ExtendedWorld;}
