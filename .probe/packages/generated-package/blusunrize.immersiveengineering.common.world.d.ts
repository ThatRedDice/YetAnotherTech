declare module "blusunrize.immersiveengineering.common.world.IEOreFeature$IEOreFeatureConfig" {
import {$IEServerConfig$Ores$VeinType, $IEServerConfig$Ores$VeinType$$Type} from "blusunrize.immersiveengineering.common.config.IEServerConfig$Ores$VeinType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$List, $List$$Type} from "java.util.List"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import {$Stream} from "java.util.stream.Stream"
import {$FeatureConfiguration$$Interface} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record} from "java.lang.Record"

export class $IEOreFeature$IEOreFeatureConfig extends $Record implements $FeatureConfiguration$$Interface {
static readonly "CODEC": $Codec<($IEOreFeature$IEOreFeatureConfig)>

constructor(targetList: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>, type: $IEServerConfig$Ores$VeinType$$Type)

public "targetList"(): $List<($OreConfiguration$TargetBlockState)>
public "getAirExposure"(): double
public "type"(): $IEServerConfig$Ores$VeinType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getSize"(): integer
public "getFeatures"(): $Stream<($ConfiguredFeature<(never), (never)>)>
get "airExposure"(): double
get "size"(): integer
get "features"(): $Stream<($ConfiguredFeature<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEOreFeature$IEOreFeatureConfig$$Type = ({"type"?: $IEServerConfig$Ores$VeinType$$Type, "targetList"?: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>}) | ([type?: $IEServerConfig$Ores$VeinType$$Type, targetList?: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEOreFeature$IEOreFeatureConfig$$Original = $IEOreFeature$IEOreFeatureConfig;}
declare module "blusunrize.immersiveengineering.common.world.FeatureMineralVein" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$Level} from "net.minecraft.world.level.Level"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$ChunkPos} from "net.minecraft.world.level.ChunkPos"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$HashMultimap} from "com.google.common.collect.HashMultimap"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $FeatureMineralVein extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static "veinGeneratedChunks": $HashMultimap<($ResourceKey<($Level)>), ($ChunkPos)>
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

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeatureMineralVein$$Type = ($FeatureMineralVein);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeatureMineralVein$$Original = $FeatureMineralVein;}
declare module "blusunrize.immersiveengineering.common.world.IEOreFeature" {
import {$GeodeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$ReplaceSphereConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$TwistingVinesConfig} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$BlockStateConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$IEOreFeature$IEOreFeatureConfig, $IEOreFeature$IEOreFeatureConfig$$Type} from "blusunrize.immersiveengineering.common.world.IEOreFeature$IEOreFeatureConfig"
import {$RootSystemConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ProbabilityFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$ReplaceBlockConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SimpleRandomFeatureConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$DripstoneClusterConfiguration} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $IEOreFeature extends $Feature<($IEOreFeature$IEOreFeatureConfig)> {
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

public "place"(arg0: $FeaturePlaceContext$$Type<($IEOreFeature$IEOreFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEOreFeature$$Type = ($IEOreFeature);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEOreFeature$$Original = $IEOreFeature;}
