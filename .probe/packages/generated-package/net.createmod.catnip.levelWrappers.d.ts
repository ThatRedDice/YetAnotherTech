declare module "net.createmod.catnip.levelWrappers.WrappedLevel" {
import {$Iterable} from "java.lang.Iterable"
import {$MapId, $MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$BlockSnapshot} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Trackable} from "dev.uncandango.alltheleaks.mixin.Trackable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ChunkSource, $ChunkSource$$Type} from "net.minecraft.world.level.chunk.ChunkSource"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$Codec} from "com.mojang.serialization.Codec"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Function$$Type} from "java.util.function.Function"
import {$Class} from "java.lang.Class"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ObjectOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ArrayList} from "java.util.ArrayList"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Map} from "java.util.Map"
import {$TickingBlockEntity} from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$RegistryAccess} from "net.minecraft.core.RegistryAccess"

export class $WrappedLevel extends $Level {
 "restoringBlockSnapshots": boolean
 "oThunderLevel": float
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "thunderLevel": float
readonly "random": $RandomSource
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "NETHER": $ResourceKey<($Level)>
 "oRainLevel": float
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "MAX_BRIGHTNESS": integer
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "rainLevel": float
 "captureBlockSnapshots": boolean

constructor(arg0: $Level$$Type)

public "setChunkSource"(arg0: $ChunkSource$$Type): void
public "getLevel"(): $Level
public "getEntity"(arg0: integer): $Entity
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): boolean
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "enabledFeatures"(): $FeatureFlagSet
public "tickRateManager"(): $TickRateManager
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "registryAccess"(): $RegistryAccess
public "getChunkSource"(): $ChunkSource
public "playSeededSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$$Type<($SoundEvent)>, arg5: $SoundSource$$Type, arg6: float, arg7: float, arg8: long): void
public "playSeededSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $Holder$$Type<($SoundEvent)>, arg3: $SoundSource$$Type, arg4: float, arg5: float, arg6: long): void
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type): void
public "getScoreboard"(): $Scoreboard
public "playSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type, arg4: float, arg5: float): void
public "playSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $SoundEvent$$Type, arg5: $SoundSource$$Type, arg6: float, arg7: float): void
public "addFreshEntity"(arg0: $Entity$$Type): boolean
public "getDayTimeFraction"(): float
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "getLightEngine"(): $LevelLightEngine
public "gatherChunkSourceStats"(): StringJS
public "getMapData"(arg0: $MapId$$Type): $MapItemSavedData
public "setMapData"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "getFreeMapId"(): $MapId
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "isStateAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($BlockState)>): boolean
public "getRecipeManager"(): $RecipeManager
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "sendBlockUpdated"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "updateNeighbourForOutputSignal"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "potionBrewing"(): $PotionBrewing
public "setDayTimeFraction"(arg0: float): void
public "getDayTimePerTick"(): float
public "setDayTimePerTick"(arg0: float): void
public "getSectionIndex"(arg0: integer): integer
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "self"(): $EntityGetter
public "getHeight"(): integer
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMinBuildHeight"(): integer
public static "startTracking"(arg0: any): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "clearNullReferences"(): void
public static "getSummary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
set "chunkSource"(value: $ChunkSource$$Type)
get "level"(): $Level
get "chunkSource"(): $ChunkSource
get "scoreboard"(): $Scoreboard
get "dayTimeFraction"(): float
get "lightEngine"(): $LevelLightEngine
get "freeMapId"(): $MapId
get "recipeManager"(): $RecipeManager
get "maxBuildHeight"(): integer
set "dayTimeFraction"(value: float)
get "dayTimePerTick"(): float
set "dayTimePerTick"(value: float)
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "height"(): integer
get "minBuildHeight"(): integer
public static get "summary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedLevel$$Type = ($WrappedLevel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedLevel$$Original = $WrappedLevel;}
