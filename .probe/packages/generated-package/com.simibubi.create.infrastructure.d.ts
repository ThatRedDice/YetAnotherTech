declare module "com.simibubi.create.infrastructure.worldgen.LayeredOreConfiguration" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$List, $List$$Type} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$LayerPattern, $LayerPattern$$Type} from "com.simibubi.create.infrastructure.worldgen.LayerPattern"

export class $LayeredOreConfiguration implements $FeatureConfiguration$$Interface {
readonly "discardChanceOnAirExposure": float
static readonly "CODEC": $Codec<($LayeredOreConfiguration)>
readonly "layerPatterns": $List<($LayerPattern)>
readonly "size": integer

constructor(arg0: $List$$Type<($LayerPattern$$Type)>, arg1: integer, arg2: float)

public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredOreConfiguration$$Type = ($LayeredOreConfiguration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredOreConfiguration$$Original = $LayeredOreConfiguration;}
declare module "com.simibubi.create.infrastructure.worldgen.LayerPattern$Layer$Builder" {
import {$NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$LayerPattern$Layer} from "com.simibubi.create.infrastructure.worldgen.LayerPattern$Layer"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Couple$$Type} from "net.createmod.catnip.data.Couple"

export class $LayerPattern$Layer$Builder {
constructor()

public "passiveBlock"(): $LayerPattern$Layer$Builder
public "blocks"(arg0: $Block$$Type, arg1: $Block$$Type): $LayerPattern$Layer$Builder
public "blocks"(arg0: $Couple$$Type<($NonNullSupplier$$Type<($Block$$Type)>)>): $LayerPattern$Layer$Builder
public "size"(arg0: integer, arg1: integer): $LayerPattern$Layer$Builder
public "block"(arg0: $Block$$Type): $LayerPattern$Layer$Builder
public "block"(arg0: $NonNullSupplier$$Type<($Block$$Type)>): $LayerPattern$Layer$Builder
public "build"(): $LayerPattern$Layer
public "weight"(arg0: integer): $LayerPattern$Layer$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerPattern$Layer$Builder$$Type = ($LayerPattern$Layer$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayerPattern$Layer$Builder$$Original = $LayerPattern$Layer$Builder;}
declare module "com.simibubi.create.infrastructure.worldgen.LayerPattern$Builder" {
import {$LayerPattern$Layer$Builder$$Type} from "com.simibubi.create.infrastructure.worldgen.LayerPattern$Layer$Builder"
import {$LayerPattern} from "com.simibubi.create.infrastructure.worldgen.LayerPattern"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $LayerPattern$Builder {
constructor()

public "inNether"(): $LayerPattern$Builder
public "layer"(arg0: $Consumer$$Type<($LayerPattern$Layer$Builder)>): $LayerPattern$Builder
public "build"(): $LayerPattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerPattern$Builder$$Type = ($LayerPattern$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayerPattern$Builder$$Original = $LayerPattern$Builder;}
declare module "com.simibubi.create.infrastructure.worldgen.LayeredOreFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$OreConfiguration$TargetBlockState$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$Function$$Type} from "java.util.function.Function"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$LayeredOreConfiguration, $LayeredOreConfiguration$$Type} from "com.simibubi.create.infrastructure.worldgen.LayeredOreConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $LayeredOreFeature extends $Feature<($LayeredOreConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "canPlaceOre"(arg0: $BlockState$$Type, arg1: $Function$$Type<($BlockPos), ($BlockState$$Type)>, arg2: $RandomSource$$Type, arg3: $LayeredOreConfiguration$$Type, arg4: $OreConfiguration$TargetBlockState$$Type, arg5: $BlockPos$MutableBlockPos$$Type): boolean
public "place"(arg0: $FeaturePlaceContext$$Type<($LayeredOreConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredOreFeature$$Type = ($LayeredOreFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredOreFeature$$Original = $LayeredOreFeature;}
declare module "com.simibubi.create.infrastructure.worldgen.LayerPattern$Layer" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"

export class $LayerPattern$Layer {
static readonly "CODEC": $Codec<($LayerPattern$Layer)>
readonly "weight": integer
readonly "minSize": integer
readonly "maxSize": integer
readonly "targets": $List<($List<($OreConfiguration$TargetBlockState)>)>

constructor(arg0: $List$$Type<($List$$Type<($OreConfiguration$TargetBlockState$$Type)>)>, arg1: integer, arg2: integer, arg3: integer)

public "rollBlock"(arg0: $RandomSource$$Type): $List<($OreConfiguration$TargetBlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerPattern$Layer$$Type = ($LayerPattern$Layer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayerPattern$Layer$$Original = $LayerPattern$Layer;}
declare module "com.simibubi.create.infrastructure.worldgen.LayerPattern" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LayerPattern$Layer, $LayerPattern$Layer$$Type} from "com.simibubi.create.infrastructure.worldgen.LayerPattern$Layer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$LayerPattern$Builder} from "com.simibubi.create.infrastructure.worldgen.LayerPattern$Builder"

export class $LayerPattern {
static readonly "CODEC": $Codec<($LayerPattern)>
readonly "layers": $List<($LayerPattern$Layer)>

constructor(arg0: $List$$Type<($LayerPattern$Layer$$Type)>)

public "rollNext"(arg0: $LayerPattern$Layer$$Type, arg1: $RandomSource$$Type): $LayerPattern$Layer
public static "builder"(): $LayerPattern$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerPattern$$Type = ($LayerPattern);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayerPattern$$Original = $LayerPattern;}
declare module "com.simibubi.create.infrastructure.config.CSchematics" {
import {$ConfigBase$ConfigInt} from "net.createmod.catnip.config.ConfigBase$ConfigInt"
import {$ConfigBase$ConfigBool} from "net.createmod.catnip.config.ConfigBase$ConfigBool"
import {$ConfigBase} from "net.createmod.catnip.config.ConfigBase"
import {$ModConfigSpec} from "net.neoforged.neoforge.common.ModConfigSpec"
import {$ConfigBase$ConfigGroup} from "net.createmod.catnip.config.ConfigBase$ConfigGroup"

export class $CSchematics extends $ConfigBase {
readonly "schematicIdleTimeout": $ConfigBase$ConfigInt
readonly "schematicannon": $ConfigBase$ConfigGroup
readonly "schematicannonDelay": $ConfigBase$ConfigInt
 "specification": $ModConfigSpec
readonly "maxSchematics": $ConfigBase$ConfigInt
readonly "creativePrintIncludesAir": $ConfigBase$ConfigBool
readonly "maxTotalSchematicSize": $ConfigBase$ConfigInt
readonly "maxSchematicPacketSize": $ConfigBase$ConfigInt
readonly "schematicannonShotsPerGunpowder": $ConfigBase$ConfigInt

constructor()

public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CSchematics$$Type = ($CSchematics);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CSchematics$$Original = $CSchematics;}
