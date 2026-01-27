declare module "dev.engine_room.flywheel.api.visual.Visual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Visual$$Interface {
}

export class $Visual implements $Visual$$Interface {
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Visual$$Type = ($Visual);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Visual$$Original = $Visual;}
declare module "dev.engine_room.flywheel.api.instance.InstanceHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InstanceHandle$$Interface {
get "deleted"(): void
set "visible"(value: boolean)
get "changed"(): void
get "visible"(): boolean
}

export class $InstanceHandle implements $InstanceHandle$$Interface {
 "setDeleted"(): void
 "setVisible"(arg0: boolean): void
 "setChanged"(): void
 "isVisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceHandle$$Type = ($InstanceHandle);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstanceHandle$$Original = $InstanceHandle;}
declare module "dev.engine_room.flywheel.api.visual.BlockEntityVisual" {
import {$Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Visual$$Interface} from "dev.engine_room.flywheel.api.visual.Visual"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $BlockEntityVisual$$Interface<T extends $BlockEntity> extends $Visual$$Interface {
}

export class $BlockEntityVisual<T extends $BlockEntity> implements $BlockEntityVisual$$Interface {
 "collectCrumblingInstances"(arg0: $Consumer$$Type<($Instance)>): void
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityVisual$$Type<T> = ($BlockEntityVisual<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityVisual$$Original<T> = $BlockEntityVisual<(T)>;}
declare module "dev.engine_room.flywheel.api.instance.Instancer" {
import {$Instance, $Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"

export interface $Instancer$$Interface<I extends $Instance> {
}

export class $Instancer<I extends $Instance> implements $Instancer$$Interface {
 "createInstances"(arr: (I)[]): void
 "createInstance"(): I
 "stealInstance"(arg0: I): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instancer$$Type<I> = ($Instancer<(I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instancer$$Original<I> = $Instancer<(I)>;}
declare module "dev.engine_room.flywheel.api.visualization.VisualEmbedding" {
import {$Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$InstancerProvider} from "dev.engine_room.flywheel.api.instance.InstancerProvider"
import {$VisualizationContext$$Interface} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"

export interface $VisualEmbedding$$Interface extends $VisualizationContext$$Interface {
}

export class $VisualEmbedding implements $VisualEmbedding$$Interface {
 "transforms"(arg0: $Matrix4fc$$Type, arg1: $Matrix3fc$$Type): void
 "delete"(): void
 "instancerProvider"(): $InstancerProvider
 "renderOrigin"(): $Vec3i
 "createEmbedding"(arg0: $Vec3i$$Type): $VisualEmbedding
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualEmbedding$$Type = ($VisualEmbedding);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VisualEmbedding$$Original = $VisualEmbedding;}
declare module "dev.engine_room.flywheel.api.model.Model" {
import {$List} from "java.util.List"
import {$Vector4fc} from "org.joml.Vector4fc"
import {$Model$ConfiguredMesh} from "dev.engine_room.flywheel.api.model.Model$ConfiguredMesh"

export interface $Model$$Interface {
}

export class $Model implements $Model$$Interface {
 "meshes"(): $List<($Model$ConfiguredMesh)>
 "boundingSphere"(): $Vector4fc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$$Type = ($Model);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Model$$Original = $Model;}
declare module "dev.engine_room.flywheel.api.visual.EntityVisual" {
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$Visual$$Interface} from "dev.engine_room.flywheel.api.visual.Visual"

export interface $EntityVisual$$Interface<T extends $Entity> extends $Visual$$Interface {
}

export class $EntityVisual<T extends $Entity> implements $EntityVisual$$Interface {
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityVisual$$Type<T> = ($EntityVisual<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityVisual$$Original<T> = $EntityVisual<(T)>;}
declare module "dev.engine_room.flywheel.api.visualization.EntityVisualizer" {
import {$VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import {$EntityVisual} from "dev.engine_room.flywheel.api.visual.EntityVisual"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $EntityVisualizer$$Interface<T extends $Entity> {
}

export class $EntityVisualizer<T extends $Entity> implements $EntityVisualizer$$Interface {
 "skipVanillaRender"(arg0: T): boolean
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: T, arg2: float): $EntityVisual<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityVisualizer$$Type<T> = ($EntityVisualizer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityVisualizer$$Original<T> = $EntityVisualizer<(T)>;}
declare module "dev.engine_room.flywheel.api.instance.Instance" {
import {$InstanceType} from "dev.engine_room.flywheel.api.instance.InstanceType"
import {$InstanceHandle} from "dev.engine_room.flywheel.api.instance.InstanceHandle"

export interface $Instance$$Interface {
set "visible"(value: boolean)
get "changed"(): void
}

export class $Instance implements $Instance$$Interface {
 "type"(): $InstanceType<(never)>
 "delete"(): void
 "handle"(): $InstanceHandle
 "setVisible"(visible: boolean): void
 "setChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instance$$Type = ($Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instance$$Original = $Instance;}
declare module "dev.engine_room.flywheel.api.instance.InstanceWriter" {
import {$Instance, $Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"

export interface $InstanceWriter$$Interface<I extends $Instance> {

(arg0: long, arg1: I): void
}

export class $InstanceWriter<I extends $Instance> implements $InstanceWriter$$Interface {
 "write"(arg0: long, arg1: I): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceWriter$$Type<I> = ((arg0: long, arg1: I) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstanceWriter$$Original<I> = $InstanceWriter<(I)>;}
declare module "dev.engine_room.flywheel.api.instance.InstanceType" {
import {$Layout} from "dev.engine_room.flywheel.api.layout.Layout"
import {$InstanceWriter} from "dev.engine_room.flywheel.api.instance.InstanceWriter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Instance} from "dev.engine_room.flywheel.api.instance.Instance"
import {$InstanceHandle$$Type} from "dev.engine_room.flywheel.api.instance.InstanceHandle"

export interface $InstanceType$$Interface<I extends $Instance> {
}

export class $InstanceType<I extends $Instance> implements $InstanceType$$Interface {
 "cullShader"(): $ResourceLocation
 "vertexShader"(): $ResourceLocation
 "writer"(): $InstanceWriter<(I)>
 "create"(arg0: $InstanceHandle$$Type): I
 "layout"(): $Layout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceType$$Type<I> = ($InstanceType<(I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstanceType$$Original<I> = $InstanceType<(I)>;}
declare module "dev.engine_room.flywheel.api.visualization.VisualizationContext" {
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$VisualEmbedding} from "dev.engine_room.flywheel.api.visualization.VisualEmbedding"
import {$InstancerProvider} from "dev.engine_room.flywheel.api.instance.InstancerProvider"

export interface $VisualizationContext$$Interface {
}

export class $VisualizationContext implements $VisualizationContext$$Interface {
 "instancerProvider"(): $InstancerProvider
 "renderOrigin"(): $Vec3i
 "createEmbedding"(arg0: $Vec3i$$Type): $VisualEmbedding
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualizationContext$$Type = ($VisualizationContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VisualizationContext$$Original = $VisualizationContext;}
declare module "dev.engine_room.flywheel.api.model.Model$ConfiguredMesh" {
import {$Mesh, $Mesh$$Type} from "dev.engine_room.flywheel.api.model.Mesh"
import {$Record} from "java.lang.Record"
import {$Material, $Material$$Type} from "dev.engine_room.flywheel.api.material.Material"

export class $Model$ConfiguredMesh extends $Record {
constructor(material: $Material$$Type, mesh: $Mesh$$Type)

public "material"(): $Material
public "mesh"(): $Mesh
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$ConfiguredMesh$$Type = ({"material"?: $Material$$Type, "mesh"?: $Mesh$$Type}) | ([material?: $Material$$Type, mesh?: $Mesh$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Model$ConfiguredMesh$$Original = $Model$ConfiguredMesh;}
declare module "dev.engine_room.flywheel.api.instance.InstancerProvider" {
import {$Instancer, $Instancer$$Type} from "dev.engine_room.flywheel.api.instance.Instancer"
import {$InstanceType, $InstanceType$$Type} from "dev.engine_room.flywheel.api.instance.InstanceType"
import {$Instance} from "dev.engine_room.flywheel.api.instance.Instance"
import {$Model, $Model$$Type} from "dev.engine_room.flywheel.api.model.Model"

export interface $InstancerProvider$$Interface {

(arg0: $InstanceType<(I)>, arg1: $Model, arg2: integer): $Instancer$$Type<(I)>
}

export class $InstancerProvider implements $InstancerProvider$$Interface {
 "instancer"<I extends $Instance>(arg0: $InstanceType$$Type<(I)>, arg1: $Model$$Type, arg2: integer): $Instancer<(I)>
 "instancer"<I extends $Instance>(type: $InstanceType$$Type<(I)>, model: $Model$$Type): $Instancer<(I)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstancerProvider$$Type = ((arg0: $InstanceType<(I)>, arg1: $Model, arg2: integer) => $Instancer$$Type<(I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstancerProvider$$Original = $InstancerProvider;}
declare module "dev.engine_room.flywheel.api.layout.Layout" {
import {$Layout$Element} from "dev.engine_room.flywheel.api.layout.Layout$Element"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"

export interface $Layout$$Interface {
}

export class $Layout implements $Layout$$Interface {
static readonly "MAX_ELEMENT_NAME_LENGTH": integer

 "byteSize"(): integer
 "byteAlignment"(): integer
 "elements"(): $List<($Layout$Element)>
 "asMap"(): $Map<(StringJS), ($Layout$Element)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layout$$Type = ($Layout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Layout$$Original = $Layout;}
declare module "dev.engine_room.flywheel.api.visualization.BlockEntityVisualizer" {
import {$BlockEntityVisual} from "dev.engine_room.flywheel.api.visual.BlockEntityVisual"
import {$VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityVisualizer$$Interface<T extends $BlockEntity> {
}

export class $BlockEntityVisualizer<T extends $BlockEntity> implements $BlockEntityVisualizer$$Interface {
 "skipVanillaRender"(arg0: T): boolean
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: T, arg2: float): $BlockEntityVisual<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityVisualizer$$Type<T> = ($BlockEntityVisualizer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityVisualizer$$Original<T> = $BlockEntityVisualizer<(T)>;}
declare module "dev.engine_room.flywheel.api.visualization.VisualizationLevel" {
import {$Iterable} from "java.lang.Iterable"
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$EntityTypeTest$$Type} from "net.minecraft.world.level.entity.EntityTypeTest"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$Stream} from "java.util.stream.Stream"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BiomeManager} from "net.minecraft.world.level.biome.BiomeManager"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$Difficulty} from "net.minecraft.world.Difficulty"
import {$ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$LevelData} from "net.minecraft.world.level.storage.LevelData"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$LevelAccessor$$Interface} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$EntityArrayList} from "dev.latvian.mods.kubejs.player.EntityArrayList"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ChunkSource} from "net.minecraft.world.level.chunk.ChunkSource"
import {$WorldBorder} from "net.minecraft.world.level.border.WorldBorder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TickPriority$$Type} from "net.minecraft.world.ticks.TickPriority"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$TargetingConditions$$Type} from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import {$Class$$Type} from "java.lang.Class"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$HolderLookup} from "net.minecraft.core.HolderLookup"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BlockGetter} from "net.minecraft.world.level.BlockGetter"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$DifficultyInstance} from "net.minecraft.world.DifficultyInstance"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$DimensionType} from "net.minecraft.world.level.dimension.DimensionType"

export interface $VisualizationLevel$$Interface extends $LevelAccessor$$Interface {
get "levelData"(): $LevelData
get "chunkSource"(): $ChunkSource
get "random"(): $RandomSource
get "difficulty"(): $Difficulty
get "server"(): $MinecraftServer
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "moonBrightness"(): float
get "moonPhase"(): integer
get "height"(): integer
get "clientSide"(): boolean
get "minBuildHeight"(): integer
get "biomeManager"(): $BiomeManager
get "seaLevel"(): integer
get "skyDarken"(): integer
get "mcEntities"(): $Iterable<($Entity)>
get "mcPlayers"(): $List<($Player)>
get "players"(): $EntityArrayList
get "lightEngine"(): $LevelLightEngine
get "worldBorder"(): $WorldBorder
get "entities"(): $EntityArrayList
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
}

export class $VisualizationLevel implements $VisualizationLevel$$Interface {
 "supportsVisualization"(): boolean
 "getLevelData"(): $LevelData
 "getChunkSource"(): $ChunkSource
 "gameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
 "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
 "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $BlockPos$$Type): void
 "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type): void
 "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
 "getRandom"(): $RandomSource
 "addParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type): void
 "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type, arg4: float, arg5: float): void
 "getServer"(): $MinecraftServer
 "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
 "neighborShapeChanged"(arg0: $Direction$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer, arg5: integer): void
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "getCurrentDifficultyAt"(arg0: $BlockPos$$Type): $DifficultyInstance
 "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
 "nextSubTickCount"(): long
 "dayTime"(): long
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer, arg3: $TickPriority$$Type): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: $TickPriority$$Type): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getHeightmapPos"(arg0: $Heightmap$Types$$Type, arg1: $BlockPos$$Type): $BlockPos
 "getEntityCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($VoxelShape)>
 "isUnobstructed"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type): boolean
 "getTimeOfDay"(arg0: float): float
 "getMoonBrightness"(): float
 "getMoonPhase"(): integer
 "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($Entity)>
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
 "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type, arg2: $Predicate$$Type<($Entity)>): $List<($Entity)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type): $List<(T)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: double, arg2: double, arg3: double): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: double, arg3: double, arg4: double): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type): $Player
 "getNearestPlayer"(arg0: $Entity$$Type, arg1: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$$Type<($Entity)>): $Player
 "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getNearestEntity"<T extends $LivingEntity>(arg0: $List$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double): T
 "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$$Type): T
 "getNearbyPlayers"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: $AABB$$Type): $List<($Player)>
 "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: $AABB$$Type): $List<(T)>
 "getPlayerByUUID"(arg0: $UUID$$Type): $Player
 "getHeight"(): integer
 "getHeight"(arg0: $Heightmap$Types$$Type, arg1: integer, arg2: integer): integer
 "enabledFeatures"(): $FeatureFlagSet
 "registryAccess"(): $RegistryAccess
 "getBiome"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "isClientSide"(): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$$Type): boolean
 "getMinBuildHeight"(): integer
 "containsAnyLiquid"(arg0: $AABB$$Type): boolean
 "getBlockStatesIfLoaded"(arg0: $AABB$$Type): $Stream<($BlockState)>
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getLightLevelDependentMagicValue"(arg0: $BlockPos$$Type): float
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
 "getChunk"(arg0: $BlockPos$$Type): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type): $ChunkAccess
 "getBiomeManager"(): $BiomeManager
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "dimensionType"(): $DimensionType
 "getSkyDarken"(): integer
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "holderLookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup<(T)>
 "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "isEmptyBlock"(arg0: $BlockPos$$Type): boolean
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
 "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "isWaterAt"(arg0: $BlockPos$$Type): boolean
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$$Type): float
 "self"(): $EntityGetter
 "getMcEntities"(): $Iterable<($Entity)>
 "getMcPlayers"(): $List<($Player)>
 "getPlayers"(): $EntityArrayList
 "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "getWorldBorder"(): $WorldBorder
 "noCollision"(arg0: $Entity$$Type): boolean
 "noCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "noCollision"(arg0: $AABB$$Type): boolean
 "noBlockCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "findSupportingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
 "findFreePosition"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type, arg2: $Vec3$$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "collidesWithSuffocatingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "getCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
 "isUnobstructed"(arg0: $Entity$$Type): boolean
 "isUnobstructed"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $CollisionContext$$Type): boolean
 "getDirectSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
 "getSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: boolean): integer
 "hasSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): boolean
 "hasNeighborSignal"(arg0: $BlockPos$$Type): boolean
 "getBestNeighborSignal"(arg0: $BlockPos$$Type): integer
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
 "isStateAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($BlockState)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($FluidState)>): boolean
 "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer, arg3: integer): boolean
 "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): boolean
 "addFreshEntity"(arg0: $Entity$$Type): boolean
 "removeBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type, arg3: integer): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type): boolean
 "getEntityByUUID"(id: $UUID$$Type): $Entity
 "getEntityByNetworkID"(id: integer): $Entity
 "getEntities"(): $EntityArrayList
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualizationLevel$$Type = ($VisualizationLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VisualizationLevel$$Original = $VisualizationLevel;}
