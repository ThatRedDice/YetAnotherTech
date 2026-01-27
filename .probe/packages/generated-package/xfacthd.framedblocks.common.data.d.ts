declare module "xfacthd.framedblocks.common.data.doubleblock.CamoGetter" {
import {$FramedDoubleBlockEntity$$Type} from "xfacthd.framedblocks.common.blockentity.doubled.FramedDoubleBlockEntity"
import {$CamoContainer} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$Enum} from "java.lang.Enum"
import {$Tuple$$Type} from "net.minecraft.util.Tuple"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CamoGetter extends $Enum<($CamoGetter)> {
static readonly "SECOND": $CamoGetter
static readonly "NONE": $CamoGetter
static readonly "FIRST": $CamoGetter

public "getCamo"(arg0: $FramedDoubleBlockEntity$$Type): $CamoContainer<(never), (never)>
public static "get"(arg0: boolean, arg1: boolean): $CamoGetter
public static "values"(): ($CamoGetter)[]
public static "valueOf"(arg0: StringJS): $CamoGetter
public "getComponent"(arg0: $Tuple$$Type<($BlockState$$Type), ($BlockState$$Type)>): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamoGetter$$Type = (("none") | ("first") | ("second"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CamoGetter$$Original = $CamoGetter;}
declare module "xfacthd.framedblocks.common.data.doubleblock.DoubleBlockStateCache" {
import {$CamoGetter} from "xfacthd.framedblocks.common.data.doubleblock.CamoGetter"
import {$IBlockType$$Type} from "xfacthd.framedblocks.api.type.IBlockType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$DoubleBlockTopInteractionMode} from "xfacthd.framedblocks.common.data.doubleblock.DoubleBlockTopInteractionMode"
import {$Tuple} from "net.minecraft.util.Tuple"
import {$StateCache} from "xfacthd.framedblocks.api.block.cache.StateCache"
import {$SolidityCheck} from "xfacthd.framedblocks.common.data.doubleblock.SolidityCheck"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DoubleBlockStateCache extends $StateCache {
static readonly "EMPTY": $StateCache

constructor(arg0: $BlockState$$Type, arg1: $IBlockType$$Type)

public "getTopInteractionMode"(): $DoubleBlockTopInteractionMode
public "getBlockPair"(): $Tuple<($BlockState), ($BlockState)>
public "getSolidityCheck"(arg0: $Direction$$Type): $SolidityCheck
public "getCamoGetter"(arg0: $Direction$$Type, arg1: $Direction$$Type): $CamoGetter
public "equals"(arg0: any): boolean
public "hashCode"(): integer
get "topInteractionMode"(): $DoubleBlockTopInteractionMode
get "blockPair"(): $Tuple<($BlockState), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBlockStateCache$$Type = ($DoubleBlockStateCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleBlockStateCache$$Original = $DoubleBlockStateCache;}
declare module "xfacthd.framedblocks.common.data.property.SlopeType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SlopeType extends $Enum<($SlopeType)> implements $StringRepresentable$$Interface {
static readonly "TOP": $SlopeType
static readonly "BOTTOM": $SlopeType
static readonly "HORIZONTAL": $SlopeType

public static "values"(): ($SlopeType)[]
public static "valueOf"(arg0: StringJS): $SlopeType
public "getSerializedName"(): StringJS
public "getOpposite"(): $SlopeType
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "opposite"(): $SlopeType
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlopeType$$Type = (("bottom") | ("horizontal") | ("top"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlopeType$$Original = $SlopeType;}
declare module "xfacthd.framedblocks.common.data.doubleblock.DoubleBlockTopInteractionMode" {
import {$Enum} from "java.lang.Enum"

export class $DoubleBlockTopInteractionMode extends $Enum<($DoubleBlockTopInteractionMode)> {
static readonly "SECOND": $DoubleBlockTopInteractionMode
static readonly "FIRST": $DoubleBlockTopInteractionMode
static readonly "EITHER": $DoubleBlockTopInteractionMode

public static "values"(): ($DoubleBlockTopInteractionMode)[]
public static "valueOf"(arg0: StringJS): $DoubleBlockTopInteractionMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBlockTopInteractionMode$$Type = (("first") | ("second") | ("either"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleBlockTopInteractionMode$$Original = $DoubleBlockTopInteractionMode;}
declare module "xfacthd.framedblocks.common.data.FramedToolType" {
import {$Enum} from "java.lang.Enum"
import {$ItemAbility} from "net.neoforged.neoforge.common.ItemAbility"

export class $FramedToolType extends $Enum<($FramedToolType)> {
static readonly "WRENCH": $FramedToolType
static readonly "HAMMER": $FramedToolType
static readonly "SCREWDRIVER": $FramedToolType
static readonly "BLUEPRINT": $FramedToolType
static readonly "KEY": $FramedToolType

public "hasAbility"(): boolean
public "getName"(): StringJS
public static "values"(): ($FramedToolType)[]
public static "valueOf"(arg0: StringJS): $FramedToolType
public "getAbility"(): $ItemAbility
get "name"(): StringJS
get "ability"(): $ItemAbility
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedToolType$$Type = (("hammer") | ("wrench") | ("blueprint") | ("key") | ("screwdriver"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedToolType$$Original = $FramedToolType;}
declare module "xfacthd.framedblocks.common.data.component.FramedMap$MarkerRemover" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $FramedMap$MarkerRemover$$Interface {

(arg0: $BlockPos): void
}

export class $FramedMap$MarkerRemover implements $FramedMap$MarkerRemover$$Interface {
 "framedblocks$removeMapMarker"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedMap$MarkerRemover$$Type = ((arg0: $BlockPos) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedMap$MarkerRemover$$Original = $FramedMap$MarkerRemover;}
declare module "xfacthd.framedblocks.common.data.doubleblock.DoubleBlockSoundType" {
import {$FramedDoubleBlockEntity$$Type} from "xfacthd.framedblocks.common.blockentity.doubled.FramedDoubleBlockEntity"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"

export class $DoubleBlockSoundType extends $SoundType {
static readonly "CANDLE": $SoundType
static readonly "MUD_BRICKS": $SoundType
static readonly "HANGING_ROOTS": $SoundType
static readonly "NYLIUM": $SoundType
static readonly "COPPER_GRATE": $SoundType
static readonly "NETHERITE_BLOCK": $SoundType
static readonly "PACKED_MUD": $SoundType
static readonly "MOSS_CARPET": $SoundType
static readonly "SMALL_AMETHYST_BUD": $SoundType
static readonly "ANVIL": $SoundType
static readonly "CHERRY_SAPLING": $SoundType
static readonly "ROOTS": $SoundType
static readonly "WART_BLOCK": $SoundType
static readonly "SCULK_VEIN": $SoundType
static readonly "WET_SPONGE": $SoundType
readonly "pitch": float
static readonly "LARGE_AMETHYST_BUD": $SoundType
static readonly "FUNGUS": $SoundType
static readonly "TUFF": $SoundType
static readonly "BAMBOO_SAPLING": $SoundType
static readonly "DEEPSLATE": $SoundType
static readonly "NETHER_GOLD_ORE": $SoundType
static readonly "TWISTING_VINES": $SoundType
static readonly "PINK_PETALS": $SoundType
static readonly "SLIME_BLOCK": $SoundType
static readonly "SCULK_SENSOR": $SoundType
static readonly "HONEY_BLOCK": $SoundType
static readonly "TUFF_BRICKS": $SoundType
static readonly "LILY_PAD": $SoundType
static readonly "AZALEA": $SoundType
static readonly "MEDIUM_AMETHYST_BUD": $SoundType
static readonly "SMALL_DRIPLEAF": $SoundType
static readonly "LADDER": $SoundType
static readonly "CHISELED_BOOKSHELF": $SoundType
static readonly "DECORATED_POT": $SoundType
static readonly "BASALT": $SoundType
static readonly "GILDED_BLACKSTONE": $SoundType
static readonly "POINTED_DRIPSTONE": $SoundType
static readonly "GLASS": $SoundType
static readonly "POLISHED_DEEPSLATE": $SoundType
static readonly "CHERRY_WOOD_HANGING_SIGN": $SoundType
static readonly "ROOTED_DIRT": $SoundType
static readonly "DEEPSLATE_BRICKS": $SoundType
static readonly "SOUL_SAND": $SoundType
static readonly "AMETHYST": $SoundType
static readonly "SCULK_CATALYST": $SoundType
static readonly "BAMBOO_WOOD": $SoundType
static readonly "CORAL_BLOCK": $SoundType
static readonly "SCULK_SHRIEKER": $SoundType
static readonly "SCAFFOLDING": $SoundType
static readonly "CHAIN": $SoundType
static readonly "TRIAL_SPAWNER": $SoundType
static readonly "SOUL_SOIL": $SoundType
static readonly "CALCITE": $SoundType
static readonly "VINE": $SoundType
static readonly "DRIPSTONE_BLOCK": $SoundType
static readonly "WOOD": $SoundType
static readonly "CHERRY_WOOD": $SoundType
static readonly "NETHER_SPROUTS": $SoundType
static readonly "SUSPICIOUS_SAND": $SoundType
static readonly "SUSPICIOUS_GRAVEL": $SoundType
static readonly "FROGLIGHT": $SoundType
static readonly "CROP": $SoundType
static readonly "DECORATED_POT_CRACKED": $SoundType
static readonly "NETHER_WOOD": $SoundType
static readonly "GRASS": $SoundType
static readonly "GLOW_LICHEN": $SoundType
static readonly "WOOL": $SoundType
static readonly "MUD": $SoundType
static readonly "SAND": $SoundType
static readonly "BAMBOO": $SoundType
static readonly "SNOW": $SoundType
static readonly "MOSS": $SoundType
static readonly "WEEPING_VINES": $SoundType
static readonly "CHERRY_LEAVES": $SoundType
static readonly "BONE_BLOCK": $SoundType
static readonly "SPORE_BLOSSOM": $SoundType
readonly "volume": float
static readonly "NETHER_WART": $SoundType
static readonly "FLOWERING_AZALEA": $SoundType
static readonly "DEEPSLATE_TILES": $SoundType
static readonly "METAL": $SoundType
static readonly "AZALEA_LEAVES": $SoundType
static readonly "SHROOMLIGHT": $SoundType
static readonly "NETHER_ORE": $SoundType
static readonly "HANGING_SIGN": $SoundType
static readonly "BAMBOO_WOOD_HANGING_SIGN": $SoundType
static readonly "AMETHYST_CLUSTER": $SoundType
static readonly "VAULT": $SoundType
static readonly "COPPER": $SoundType
static readonly "GRAVEL": $SoundType
static readonly "MANGROVE_ROOTS": $SoundType
static readonly "LANTERN": $SoundType
static readonly "COBWEB": $SoundType
static readonly "POWDER_SNOW": $SoundType
static readonly "ANCIENT_DEBRIS": $SoundType
static readonly "EMPTY": $SoundType
static readonly "NETHER_BRICKS": $SoundType
static readonly "MUDDY_MANGROVE_ROOTS": $SoundType
static readonly "BIG_DRIPLEAF": $SoundType
static readonly "HEAVY_CORE": $SoundType
static readonly "POLISHED_TUFF": $SoundType
static readonly "HARD_CROP": $SoundType
static readonly "LODESTONE": $SoundType
static readonly "STEM": $SoundType
static readonly "NETHER_WOOD_HANGING_SIGN": $SoundType
static readonly "CAVE_VINES": $SoundType
static readonly "NETHERRACK": $SoundType
static readonly "WET_GRASS": $SoundType
static readonly "SPONGE": $SoundType
static readonly "COPPER_BULB": $SoundType
static readonly "SCULK": $SoundType
static readonly "FROGSPAWN": $SoundType
static readonly "SWEET_BERRY_BUSH": $SoundType
static readonly "STONE": $SoundType

constructor(arg0: $FramedDoubleBlockEntity$$Type)

public "getPlaceSound"(): $SoundEvent
public "getBreakSound"(): $SoundEvent
public "getHitSound"(): $SoundEvent
public "getFallSound"(): $SoundEvent
public "getVolume"(): float
public "getPitch"(): float
public "getStepSound"(): $SoundEvent
get "placeSound"(): $SoundEvent
get "breakSound"(): $SoundEvent
get "hitSound"(): $SoundEvent
get "fallSound"(): $SoundEvent
get "stepSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBlockSoundType$$Type = ($DoubleBlockSoundType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleBlockSoundType$$Original = $DoubleBlockSoundType;}
declare module "xfacthd.framedblocks.common.data.BlockType" {
import {$Enum} from "java.lang.Enum"
import {$FullFacePredicate} from "xfacthd.framedblocks.api.predicate.fullface.FullFacePredicate"
import {$IBlockType$$Type, $IBlockType$$Interface} from "xfacthd.framedblocks.api.type.IBlockType"
import {$SideSkipPredicate} from "xfacthd.framedblocks.api.predicate.cull.SideSkipPredicate"
import {$ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$ConTexMode} from "xfacthd.framedblocks.api.predicate.contex.ConTexMode"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConnectionPredicate} from "xfacthd.framedblocks.api.predicate.contex.ConnectionPredicate"
import {$ShapeProvider, $ShapeProvider$$Type} from "xfacthd.framedblocks.api.shapes.ShapeProvider"

export class $BlockType extends $Enum<($BlockType)> implements $IBlockType$$Interface {
static readonly "FRAMED_GLOWING_ITEM_FRAME": $BlockType
static readonly "FRAMED_SLOPE_EDGE": $BlockType
static readonly "FRAMED_STAIRS": $BlockType
static readonly "FRAMED_DIVIDED_PANEL_HORIZONTAL": $BlockType
static readonly "FRAMED_VERTICAL_DOUBLE_HALF_SLOPE": $BlockType
static readonly "FRAMED_ELEVATED_PYRAMID_SLAB": $BlockType
static readonly "FRAMED_SMALL_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_BOUNCY_CUBE": $BlockType
static readonly "FRAMED_SMALL_INNER_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_IRON_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_THREEWAY_CORNER": $BlockType
static readonly "FRAMED_SMALL_DOUBLE_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_SLOPED_STAIRS": $BlockType
static readonly "FRAMED_FANCY_POWERED_RAIL_SLOPE": $BlockType
static readonly "FRAMED_PYRAMID_SLAB": $BlockType
static readonly "FRAMED_ONE_WAY_WINDOW": $BlockType
static readonly "FRAMED_SMALL_DOUBLE_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_TANK": $BlockType
static readonly "FRAMED_STACKED_SLOPE_SLAB": $BlockType
static readonly "FRAMED_INNER_PRISM_CORNER": $BlockType
static readonly "FRAMED_ELEVATED_DOUBLE_SLOPE_EDGE": $BlockType
static readonly "FRAMED_ELEVATED_INNER_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_VERTICAL_DIVIDED_STAIRS": $BlockType
static readonly "FRAMED_PRISM_CORNER": $BlockType
static readonly "FRAMED_LARGE_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_COLLAPSIBLE_BLOCK": $BlockType
static readonly "FRAMED_WATERLOGGABLE_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_EXT_INNER_DOUBLE_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_ADJ_DOUBLE_COPYCAT_PANEL": $BlockType
static readonly "FRAMED_VERTICAL_DOUBLE_STAIRS": $BlockType
static readonly "FRAMED_LARGE_INNER_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_FLAT_STACKED_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_EXTENDED_DOUBLE_SLOPE_PANEL": $BlockType
static readonly "FRAMED_EXT_DOUBLE_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_DETECTOR_RAIL_SLOPE": $BlockType
static readonly "FRAMED_FLAT_EXT_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_FLAT_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_ELEV_DOUBLE_INNER_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_FANCY_ACTIVATOR_RAIL_SLOPE": $BlockType
static readonly "FRAMED_FLOOR_BOARD": $BlockType
static readonly "FRAMED_FANCY_RAIL_SLOPE": $BlockType
static readonly "FRAMED_THREEWAY_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_EXT_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_FLAT_INNER_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_FANCY_DETECTOR_RAIL": $BlockType
static readonly "FRAMED_VERTICAL_DOUBLE_HALF_STAIRS": $BlockType
static readonly "FRAMED_OBSIDIAN_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_INNER_CORNER_SLOPE": $BlockType
static readonly "FRAMED_CHECKERED_PANEL": $BlockType
static readonly "FRAMED_DOUBLE_CORNER": $BlockType
static readonly "FRAMED_FLAT_STACKED_INNER_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_CORNER_SLOPE": $BlockType
static readonly "FRAMED_FLOWER_POT": $BlockType
static readonly "FRAMED_WATERLOGGABLE_IRON_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_LANTERN": $BlockType
static readonly "FRAMED_DOUBLE_THREEWAY_CORNER_PILLAR": $BlockType
static readonly "FRAMED_CORNER_STRIP": $BlockType
static readonly "FRAMED_ELEVATED_SLOPE_EDGE": $BlockType
static readonly "FRAMED_FANCY_ACTIVATOR_RAIL": $BlockType
static readonly "FRAMED_FLAT_DOUBLE_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_SPLIT_PILLAR_SOCKET": $BlockType
static readonly "FRAMED_STACKED_INNER_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_EXTENDED_SLOPE_PANEL": $BlockType
static readonly "FRAMED_INNER_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_TUBE": $BlockType
static readonly "FRAMED_CHECKERED_CUBE_SEGMENT": $BlockType
static readonly "FRAMED_DOUBLE_PRISM_CORNER": $BlockType
static readonly "FRAMED_EXT_INNER_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_PILLAR": $BlockType
static readonly "FRAMED_STACKED_INNER_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_MASONRY_CORNER": $BlockType
static readonly "FRAMED_FANCY_RAIL": $BlockType
static readonly "FRAMED_FLAT_INV_DOUBLE_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_FLAT_EXT_INNER_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_LARGE_DOUBLE_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_DIVIDED_PANEL_VERTICAL": $BlockType
static readonly "FRAMED_ITEM_FRAME": $BlockType
static readonly "FRAMED_LARGE_STONE_BUTTON": $BlockType
static readonly "FRAMED_ELEVATED_DOUBLE_SLOPE_SLAB": $BlockType
static readonly "FRAMED_HALF_STAIRS": $BlockType
static readonly "FRAMED_WALL_TORCH": $BlockType
static readonly "FRAMED_FLAT_INNER_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_PILLAR_SOCKET": $BlockType
static readonly "FRAMED_INV_DOUBLE_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_PANEL": $BlockType
static readonly "FRAMED_UPPER_PYRAMID_SLAB": $BlockType
static readonly "FRAMED_LATTICE_BLOCK": $BlockType
static readonly "FRAMED_HALF_SLOPE": $BlockType
static readonly "FRAMED_BOOKSHELF": $BlockType
static readonly "FRAMED_WATERLOGGABLE_OBSIDIAN_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_STACKED_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_FLAT_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_FLAT_ELEV_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_CORNER_TUBE": $BlockType
static readonly "FRAMED_DOUBLE_SLOPE": $BlockType
static readonly "FRAMED_IRON_TRAPDOOR": $BlockType
static readonly "FRAMED_DOUBLE_PANEL": $BlockType
static readonly "FRAMED_SLICED_SLOPED_STAIRS_SLAB": $BlockType
static readonly "FRAMED_ACTIVATOR_RAIL_SLOPE": $BlockType
static readonly "FRAMED_SMALL_INNER_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_FLAT_EXT_INNER_DOUBLE_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_IRON_GATE": $BlockType
static readonly "FRAMED_MINI_CUBE": $BlockType
static readonly "FRAMED_WALL_BOARD": $BlockType
static readonly "FRAMED_STACKED_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_INV_DOUBLE_SLOPE_SLAB": $BlockType
static readonly "FRAMED_VERTICAL_SLICED_SLOPED_STAIRS_SLOPE": $BlockType
static readonly "FRAMED_SMALL_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_STACKED_PYRAMID_SLAB": $BlockType
static readonly "FRAMED_STONE_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_SOUL_LANTERN": $BlockType
static readonly "FRAMED_POST": $BlockType
static readonly "FRAMED_STACKED_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_EXT_INNER_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_GATE": $BlockType
static readonly "FRAMED_GOLD_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_REDSTONE_WALL_TORCH": $BlockType
static readonly "FRAMED_CHEST": $BlockType
static readonly "FRAMED_SLOPED_DOUBLE_STAIRS": $BlockType
static readonly "FRAMED_BARS": $BlockType
static readonly "FRAMED_VERTICAL_SLICED_SLOPED_STAIRS_PANEL": $BlockType
static readonly "FRAMED_ELEV_DOUBLE_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_DOUBLE_STAIRS": $BlockType
static readonly "FRAMED_TORCH": $BlockType
static readonly "FRAMED_ADJ_DOUBLE_SLAB": $BlockType
static readonly "FRAMED_VERTICAL_SLICED_STAIRS": $BlockType
static readonly "FRAMED_DOUBLE_THREEWAY_CORNER": $BlockType
static readonly "FRAMED_FANCY_DETECTOR_RAIL_SLOPE": $BlockType
static readonly "FRAMED_FLAT_ELEV_INNER_DOUBLE_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_STACKED_SLOPE_PANEL": $BlockType
static readonly "FRAMED_VERTICAL_SLOPED_STAIRS": $BlockType
static readonly "FRAMED_LARGE_INNER_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_COMPOUND_SLOPE_PANEL": $BlockType
static readonly "FRAMED_FLAT_INV_DOUBLE_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_HOPPER": $BlockType
static readonly "FRAMED_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_SLAB_CORNER": $BlockType
static readonly "FRAMED_SLOPED_PRISM": $BlockType
static readonly "FRAMED_ELEVATED_INNER_SLOPED_PRISM": $BlockType
static readonly "FRAMED_CHAIN": $BlockType
static readonly "FRAMED_DOUBLE_SLOPE_PANEL": $BlockType
static readonly "FRAMED_LADDER": $BlockType
static readonly "FRAMED_FLAT_ELEV_DOUBLE_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_GLOWING_CUBE": $BlockType
static readonly "FRAMED_VERTICAL_STAIRS": $BlockType
static readonly "FRAMED_CENTERED_PANEL": $BlockType
static readonly "FRAMED_DOUBLE_SLOPE_SLAB": $BlockType
static readonly "FRAMED_SLAB": $BlockType
static readonly "FRAMED_POWERED_RAIL_SLOPE": $BlockType
static readonly "FRAMED_CUBE": $BlockType
static readonly "FRAMED_DIVIDED_STAIRS": $BlockType
static readonly "FRAMED_EXT_INNER_DOUBLE_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_INNER_THREEWAY_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_LARGE_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_MASONRY_CORNER_SEGMENT": $BlockType
static readonly "FRAMED_ADJ_DOUBLE_PANEL": $BlockType
static readonly "FRAMED_SLOPE": $BlockType
static readonly "FRAMED_ELEVATED_INNER_DOUBLE_SLOPED_PRISM": $BlockType
static readonly "FRAMED_TRAPDOOR": $BlockType
static readonly "FRAMED_DIVIDED_SLAB": $BlockType
static readonly "FRAMED_HORIZONTAL_PANE": $BlockType
static readonly "FRAMED_WATERLOGGABLE_STONE_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_STACKED_INNER_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_PATH": $BlockType
static readonly "FRAMED_SECRET_STORAGE": $BlockType
static readonly "FRAMED_HANGING_SIGN": $BlockType
static readonly "FRAMED_LARGE_DOUBLE_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_LAYERED_CUBE": $BlockType
static readonly "FRAMED_RAIL_SLOPE": $BlockType
static readonly "FRAMED_SLOPE_PANEL": $BlockType
static readonly "FRAMED_DIVIDED_SLOPE": $BlockType
static readonly "FRAMED_SLICED_SLOPED_STAIRS_SLOPE": $BlockType
static readonly "FRAMED_ELEVATED_INNER_DOUBLE_PRISM": $BlockType
static readonly "FRAMED_ADJ_DOUBLE_COPYCAT_SLAB": $BlockType
static readonly "FRAMED_FANCY_POWERED_RAIL": $BlockType
static readonly "FRAMED_VERTICAL_HALF_STAIRS": $BlockType
static readonly "FRAMED_LIGHTNING_ROD": $BlockType
static readonly "FRAMED_COLLAPSIBLE_COPYCAT_BLOCK": $BlockType
static readonly "FRAMED_INNER_THREEWAY_CORNER": $BlockType
static readonly "FRAMED_FENCE_GATE": $BlockType
static readonly "FRAMED_THREEWAY_CORNER_PILLAR": $BlockType
static readonly "FRAMED_FENCE": $BlockType
static readonly "FRAMED_LEVER": $BlockType
static readonly "FRAMED_INV_DOUBLE_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_LARGE_BUTTON": $BlockType
static readonly "FRAMED_FLAT_STACKED_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_TARGET": $BlockType
static readonly "FRAMED_CHECKERED_CUBE": $BlockType
static readonly "FRAMED_CHECKERED_SLAB_SEGMENT": $BlockType
static readonly "FRAMED_STACKED_SLOPE_EDGE": $BlockType
static readonly "FRAMED_STONE_BUTTON": $BlockType
static readonly "FRAMED_VERTICAL_HALF_SLOPE": $BlockType
static readonly "FRAMED_WATERLOGGABLE_GOLD_PRESSURE_PLATE": $BlockType
static readonly "FRAMED_SLOPE_SLAB": $BlockType
static readonly "FRAMED_PANE": $BlockType
static readonly "FRAMED_ELEVATED_CORNER_SLOPE_EDGE": $BlockType
static readonly "FRAMED_EXT_DOUBLE_CORNER_SLOPE_PANEL": $BlockType
static readonly "FRAMED_REDSTONE_BLOCK": $BlockType
static readonly "FRAMED_ELEVATED_INNER_PRISM": $BlockType
static readonly "FRAMED_CHECKERED_SLAB": $BlockType
static readonly "FRAMED_DOUBLE_SLAB": $BlockType
static readonly "FRAMED_HALF_PILLAR": $BlockType
static readonly "FRAMED_DOUBLE_HALF_SLOPE": $BlockType
static readonly "FRAMED_THICK_LATTICE": $BlockType
static readonly "FRAMED_SLAB_EDGE": $BlockType
static readonly "FRAMED_SLICED_STAIRS_SLAB": $BlockType
static readonly "FRAMED_FLAT_DOUBLE_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_SIGN": $BlockType
static readonly "FRAMED_WALL_HANGING_SIGN": $BlockType
static readonly "FRAMED_DOOR": $BlockType
static readonly "FRAMED_REDSTONE_TORCH": $BlockType
static readonly "FRAMED_FLAT_ELEV_INNER_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_BUTTON": $BlockType
static readonly "FRAMED_EXT_CORNER_SLOPE_PANEL_W": $BlockType
static readonly "FRAMED_INV_DOUBLE_SLOPE_PANEL": $BlockType
static readonly "FRAMED_FLAT_EXT_DOUBLE_SLOPE_PANEL_CORNER": $BlockType
static readonly "FRAMED_CHECKERED_PANEL_SEGMENT": $BlockType
static readonly "FRAMED_WALL": $BlockType
static readonly "FRAMED_SOUL_WALL_TORCH": $BlockType
static readonly "FRAMED_SOUL_TORCH": $BlockType
static readonly "FRAMED_CENTERED_SLAB": $BlockType
static readonly "FRAMED_COMPOUND_SLOPE_SLAB": $BlockType
static readonly "FRAMED_CORNER_PILLAR": $BlockType
static readonly "FRAMED_SLICED_STAIRS_PANEL": $BlockType
static readonly "FRAMED_PRISM": $BlockType
static readonly "FRAMED_CHISELED_BOOKSHELF": $BlockType
static readonly "FRAMED_DOUBLE_HALF_STAIRS": $BlockType
static readonly "FRAMED_WALL_SIGN": $BlockType
static readonly "FRAMED_FLAT_STACKED_INNER_SLOPE_SLAB_CORNER": $BlockType
static readonly "FRAMED_VERTICAL_SLOPED_DOUBLE_STAIRS": $BlockType
static readonly "FRAMED_IRON_DOOR": $BlockType
static readonly "FRAMED_PYRAMID": $BlockType
static readonly "FRAMED_ELEVATED_SLOPE_SLAB": $BlockType

public "getSideSkipPredicate"(): $SideSkipPredicate
public "canOccludeWithSolidCamo"(): boolean
public "canLockState"(): boolean
public "allowMakingIntangible"(): boolean
public "supportsWaterLogging"(): boolean
public "getConnectionPredicate"(): $ConnectionPredicate
public "supportsConnectedTextures"(): boolean
public "getFullFacePredicate"(): $FullFacePredicate
public "generateOcclusionShapes"(arg0: $ImmutableList$$Type<($BlockState$$Type)>, arg1: $ShapeProvider$$Type): $ShapeProvider
public "hasSpecialHitbox"(): boolean
public "generateShapes"(arg0: $ImmutableList$$Type<($BlockState$$Type)>): $ShapeProvider
public "getMinimumConTexMode"(): $ConTexMode
public "consumesTwoCamosInCamoApplicationRecipe"(): boolean
public "hasBlockItem"(): boolean
public "hasSpecialTile"(): boolean
public "isDoubleBlock"(): boolean
public "getName"(): StringJS
public static "values"(): ($BlockType)[]
public "compareTo"(arg0: $IBlockType$$Type): integer
public static "valueOf"(arg0: StringJS): $BlockType
get "sideSkipPredicate"(): $SideSkipPredicate
get "connectionPredicate"(): $ConnectionPredicate
get "fullFacePredicate"(): $FullFacePredicate
get "minimumConTexMode"(): $ConTexMode
get "doubleBlock"(): boolean
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$$Type = (("framed_cube") | ("framed_slope") | ("framed_double_slope") | ("framed_half_slope") | ("framed_vertical_half_slope") | ("framed_divided_slope") | ("framed_double_half_slope") | ("framed_vertical_double_half_slope") | ("framed_corner_slope") | ("framed_inner_corner_slope") | ("framed_double_corner") | ("framed_prism_corner") | ("framed_inner_prism_corner") | ("framed_double_prism_corner") | ("framed_threeway_corner") | ("framed_inner_threeway_corner") | ("framed_double_threeway_corner") | ("framed_slope_edge") | ("framed_elevated_slope_edge") | ("framed_elevated_double_slope_edge") | ("framed_stacked_slope_edge") | ("framed_corner_slope_edge") | ("framed_inner_corner_slope_edge") | ("framed_elevated_corner_slope_edge") | ("framed_elevated_inner_corner_slope_edge") | ("framed_elev_double_corner_slope_edge") | ("framed_elev_double_inner_corner_slope_edge") | ("framed_stacked_corner_slope_edge") | ("framed_stacked_inner_corner_slope_edge") | ("framed_threeway_corner_slope_edge") | ("framed_inner_threeway_corner_slope_edge") | ("framed_slab") | ("framed_double_slab") | ("framed_adj_double_slab") | ("framed_adj_double_copycat_slab") | ("framed_divided_slab") | ("framed_slab_edge") | ("framed_slab_corner") | ("framed_panel") | ("framed_double_panel") | ("framed_adj_double_panel") | ("framed_adj_double_copycat_panel") | ("framed_divided_panel_horizontal") | ("framed_divided_panel_vertical") | ("framed_corner_pillar") | ("framed_stairs") | ("framed_double_stairs") | ("framed_half_stairs") | ("framed_divided_stairs") | ("framed_double_half_stairs") | ("framed_sliced_stairs_slab") | ("framed_sliced_stairs_panel") | ("framed_sloped_stairs") | ("framed_sloped_double_stairs") | ("framed_sliced_sloped_stairs_slab") | ("framed_sliced_sloped_stairs_slope") | ("framed_vertical_stairs") | ("framed_vertical_double_stairs") | ("framed_vertical_half_stairs") | ("framed_vertical_divided_stairs") | ("framed_vertical_double_half_stairs") | ("framed_vertical_sliced_stairs") | ("framed_vertical_sloped_stairs") | ("framed_vertical_sloped_double_stairs") | ("framed_vertical_sliced_sloped_stairs_panel") | ("framed_vertical_sliced_sloped_stairs_slope") | ("framed_threeway_corner_pillar") | ("framed_double_threeway_corner_pillar") | ("framed_wall") | ("framed_fence") | ("framed_fence_gate") | ("framed_door") | ("framed_iron_door") | ("framed_trapdoor") | ("framed_iron_trapdoor") | ("framed_pressure_plate") | ("framed_waterloggable_pressure_plate") | ("framed_stone_pressure_plate") | ("framed_waterloggable_stone_pressure_plate") | ("framed_obsidian_pressure_plate") | ("framed_waterloggable_obsidian_pressure_plate") | ("framed_gold_pressure_plate") | ("framed_waterloggable_gold_pressure_plate") | ("framed_iron_pressure_plate") | ("framed_waterloggable_iron_pressure_plate") | ("framed_ladder") | ("framed_button") | ("framed_stone_button") | ("framed_large_button") | ("framed_large_stone_button") | ("framed_lever") | ("framed_sign") | ("framed_wall_sign") | ("framed_hanging_sign") | ("framed_wall_hanging_sign") | ("framed_torch") | ("framed_wall_torch") | ("framed_soul_torch") | ("framed_soul_wall_torch") | ("framed_redstone_torch") | ("framed_redstone_wall_torch") | ("framed_floor_board") | ("framed_wall_board") | ("framed_corner_strip") | ("framed_lattice_block") | ("framed_thick_lattice") | ("framed_chest") | ("framed_secret_storage") | ("framed_tank") | ("framed_bars") | ("framed_pane") | ("framed_horizontal_pane") | ("framed_rail_slope") | ("framed_powered_rail_slope") | ("framed_detector_rail_slope") | ("framed_activator_rail_slope") | ("framed_fancy_rail") | ("framed_fancy_powered_rail") | ("framed_fancy_detector_rail") | ("framed_fancy_activator_rail") | ("framed_fancy_rail_slope") | ("framed_fancy_powered_rail_slope") | ("framed_fancy_detector_rail_slope") | ("framed_fancy_activator_rail_slope") | ("framed_flower_pot") | ("framed_pillar") | ("framed_half_pillar") | ("framed_pillar_socket") | ("framed_split_pillar_socket") | ("framed_post") | ("framed_collapsible_block") | ("framed_collapsible_copycat_block") | ("framed_bouncy_cube") | ("framed_redstone_block") | ("framed_prism") | ("framed_elevated_inner_prism") | ("framed_elevated_inner_double_prism") | ("framed_sloped_prism") | ("framed_elevated_inner_sloped_prism") | ("framed_elevated_inner_double_sloped_prism") | ("framed_slope_slab") | ("framed_elevated_slope_slab") | ("framed_compound_slope_slab") | ("framed_double_slope_slab") | ("framed_inv_double_slope_slab") | ("framed_elevated_double_slope_slab") | ("framed_stacked_slope_slab") | ("framed_flat_slope_slab_corner") | ("framed_flat_inner_slope_slab_corner") | ("framed_flat_elev_slope_slab_corner") | ("framed_flat_elev_inner_slope_slab_corner") | ("framed_flat_double_slope_slab_corner") | ("framed_flat_inv_double_slope_slab_corner") | ("framed_flat_elev_double_slope_slab_corner") | ("framed_flat_elev_inner_double_slope_slab_corner") | ("framed_flat_stacked_slope_slab_corner") | ("framed_flat_stacked_inner_slope_slab_corner") | ("framed_slope_panel") | ("framed_extended_slope_panel") | ("framed_compound_slope_panel") | ("framed_double_slope_panel") | ("framed_inv_double_slope_panel") | ("framed_extended_double_slope_panel") | ("framed_stacked_slope_panel") | ("framed_flat_slope_panel_corner") | ("framed_flat_inner_slope_panel_corner") | ("framed_flat_ext_slope_panel_corner") | ("framed_flat_ext_inner_slope_panel_corner") | ("framed_flat_double_slope_panel_corner") | ("framed_flat_inv_double_slope_panel_corner") | ("framed_flat_ext_double_slope_panel_corner") | ("framed_flat_ext_inner_double_slope_panel_corner") | ("framed_flat_stacked_slope_panel_corner") | ("framed_flat_stacked_inner_slope_panel_corner") | ("framed_small_corner_slope_panel") | ("framed_small_corner_slope_panel_w") | ("framed_large_corner_slope_panel") | ("framed_large_corner_slope_panel_w") | ("framed_small_inner_corner_slope_panel") | ("framed_small_inner_corner_slope_panel_w") | ("framed_large_inner_corner_slope_panel") | ("framed_large_inner_corner_slope_panel_w") | ("framed_ext_corner_slope_panel") | ("framed_ext_corner_slope_panel_w") | ("framed_ext_inner_corner_slope_panel") | ("framed_ext_inner_corner_slope_panel_w") | ("framed_small_double_corner_slope_panel") | ("framed_small_double_corner_slope_panel_w") | ("framed_large_double_corner_slope_panel") | ("framed_large_double_corner_slope_panel_w") | ("framed_inv_double_corner_slope_panel") | ("framed_inv_double_corner_slope_panel_w") | ("framed_ext_double_corner_slope_panel") | ("framed_ext_double_corner_slope_panel_w") | ("framed_ext_inner_double_corner_slope_panel") | ("framed_ext_inner_double_corner_slope_panel_w") | ("framed_stacked_corner_slope_panel") | ("framed_stacked_corner_slope_panel_w") | ("framed_stacked_inner_corner_slope_panel") | ("framed_stacked_inner_corner_slope_panel_w") | ("framed_glowing_cube") | ("framed_pyramid") | ("framed_pyramid_slab") | ("framed_elevated_pyramid_slab") | ("framed_upper_pyramid_slab") | ("framed_stacked_pyramid_slab") | ("framed_target") | ("framed_gate") | ("framed_iron_gate") | ("framed_item_frame") | ("framed_glowing_item_frame") | ("framed_mini_cube") | ("framed_one_way_window") | ("framed_bookshelf") | ("framed_chiseled_bookshelf") | ("framed_centered_slab") | ("framed_centered_panel") | ("framed_masonry_corner_segment") | ("framed_masonry_corner") | ("framed_checkered_cube_segment") | ("framed_checkered_cube") | ("framed_checkered_slab_segment") | ("framed_checkered_slab") | ("framed_checkered_panel_segment") | ("framed_checkered_panel") | ("framed_tube") | ("framed_corner_tube") | ("framed_chain") | ("framed_lantern") | ("framed_soul_lantern") | ("framed_hopper") | ("framed_layered_cube") | ("framed_lightning_rod") | ("framed_path"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockType$$Original = $BlockType;}
declare module "xfacthd.framedblocks.common.data.camo.block.BlockCamoContainerFactory" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CamoContainer} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleBlockCamoContainerFactory} from "xfacthd.framedblocks.api.camo.block.SimpleBlockCamoContainerFactory"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TriggerRegistrar$$Type} from "xfacthd.framedblocks.api.camo.TriggerRegistrar"

export class $BlockCamoContainerFactory extends $SimpleBlockCamoContainerFactory {
static readonly "MSG_BLOCK_ENTITY": $Component
static readonly "MSG_BLACKLISTED": $Component
static readonly "MSG_NON_SOLID": $Component

constructor()

public "registerTriggerItems"(arg0: $TriggerRegistrar$$Type): void
public "applyCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): $CamoContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCamoContainerFactory$$Type = ($BlockCamoContainerFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCamoContainerFactory$$Original = $BlockCamoContainerFactory;}
declare module "xfacthd.framedblocks.common.data.property.ChestState" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ChestState extends $Enum<($ChestState)> implements $StringRepresentable$$Interface {
static readonly "CLOSED": $ChestState
static readonly "CLOSING": $ChestState
static readonly "OPENING": $ChestState

public static "values"(): ($ChestState)[]
public static "valueOf"(arg0: StringJS): $ChestState
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestState$$Type = (("closed") | ("opening") | ("closing"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChestState$$Original = $ChestState;}
declare module "xfacthd.framedblocks.common.data.camo.fluid.FluidCamoContainerFactory" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$TriggerRegistrar$$Type} from "xfacthd.framedblocks.api.camo.TriggerRegistrar"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FluidCamoContainer, $FluidCamoContainer$$Type} from "xfacthd.framedblocks.common.data.camo.fluid.FluidCamoContainer"
import {$CamoContainerFactory} from "xfacthd.framedblocks.api.camo.CamoContainerFactory"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FluidCamoContainerFactory extends $CamoContainerFactory<($FluidCamoContainer)> {
static readonly "MSG_BLACKLISTED": $Component

constructor()

public "canTriviallyConvertToItemStack"(): boolean
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FluidCamoContainer)>
public "applyCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): $CamoContainer
public "dropCamo"(arg0: $FluidCamoContainer$$Type): $ItemStack
public "dropCamo"(arg0: $CamoContainer$$Type): $ItemStack
public "removeCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type, arg4: $CamoContainer$$Type): boolean
public "removeCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type, arg4: $FluidCamoContainer$$Type): boolean
public "validateCamo"(arg0: $CamoContainer$$Type): boolean
public "validateCamo"(arg0: $FluidCamoContainer$$Type): boolean
public "registerTriggerItems"(arg0: $TriggerRegistrar$$Type): void
public "codec"(): $MapCodec<($FluidCamoContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCamoContainerFactory$$Type = ($FluidCamoContainerFactory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidCamoContainerFactory$$Original = $FluidCamoContainerFactory;}
declare module "xfacthd.framedblocks.common.data.camo.fluid.FluidCamoContainer" {
import {$FluidCamoContent} from "xfacthd.framedblocks.common.data.camo.fluid.FluidCamoContent"
import {$CamoContainer} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$CamoContainerFactory} from "xfacthd.framedblocks.api.camo.CamoContainerFactory"

export class $FluidCamoContainer extends $CamoContainer<($FluidCamoContent), ($FluidCamoContainer)> {
constructor(arg0: $Fluid$$Type)

public "canRotateCamo"(): boolean
public "rotateCamo"(): $FluidCamoContainer
public "getFluid"(): $Fluid
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getFactory"(): $CamoContainerFactory<($FluidCamoContainer)>
get "fluid"(): $Fluid
get "factory"(): $CamoContainerFactory<($FluidCamoContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCamoContainer$$Type = ($FluidCamoContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidCamoContainer$$Original = $FluidCamoContainer;}
declare module "xfacthd.framedblocks.common.data.doubleblock.NullCullPredicate" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NullCullPredicate extends $Record {
static readonly "ONLY_RIGHT": $NullCullPredicate
static readonly "NEVER": $NullCullPredicate
static readonly "ONLY_LEFT": $NullCullPredicate
static readonly "ALWAYS": $NullCullPredicate

constructor(leftStateTest: $Predicate$$Type<($BlockState)>, rightStateTest: $Predicate$$Type<($BlockState)>)

public "leftStateTest"(): $Predicate<($BlockState)>
public "rightStateTest"(): $Predicate<($BlockState)>
public "testLeft"(arg0: $BlockState$$Type): boolean
public "testRight"(arg0: $BlockState$$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NullCullPredicate$$Type = ({"rightStateTest"?: $Predicate$$Type<($BlockState$$Type)>, "leftStateTest"?: $Predicate$$Type<($BlockState$$Type)>}) | ([rightStateTest?: $Predicate$$Type<($BlockState$$Type)>, leftStateTest?: $Predicate$$Type<($BlockState$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NullCullPredicate$$Original = $NullCullPredicate;}
declare module "xfacthd.framedblocks.common.data.camo.fluid.FluidCamoContent" {
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CamoClientHandler} from "xfacthd.framedblocks.api.camo.CamoClientHandler"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$CamoContent, $CamoContent$$Type} from "xfacthd.framedblocks.api.camo.CamoContent"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ParticleOptions} from "net.minecraft.core.particles.ParticleOptions"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"

export class $FluidCamoContent extends $CamoContent<($FluidCamoContent)> {
constructor(arg0: $Fluid$$Type)

public "getClientHandler"(): $CamoClientHandler<($FluidCamoContent)>
public "getFluid"(): $Fluid
public "getExplosionResistance"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): float
public "isSolid"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "canOcclude"(): boolean
public "getFlammability"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "canSustainPlant"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): $TriState
public "getBeaconColorMultiplier"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): integer
public "isFlammable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "canEntityDestroy"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type): boolean
public "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type): boolean
public "getMapColor"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MapColor
public "propagatesSkylightDown"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: float): float
public "getCamoName"(): $MutableComponent
public "getAsBlockState"(): $BlockState
public "isEmissive"(): boolean
public "getCamoId"(): StringJS
public "makeRunningLandingParticles"(arg0: $BlockPos$$Type): $ParticleOptions
public "getAppearanceState"(): $BlockState
public "isOccludedBy"(arg0: $CamoContent$$Type<(never)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "isOccludedBy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "occludes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
public "getTintColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: integer): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getSoundType"(): $SoundType
public "getFriction"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Entity$$Type, arg3: float): float
public "getLightEmission"(): integer
get "clientHandler"(): $CamoClientHandler<($FluidCamoContent)>
get "fluid"(): $Fluid
get "camoName"(): $MutableComponent
get "asBlockState"(): $BlockState
get "emissive"(): boolean
get "camoId"(): StringJS
get "appearanceState"(): $BlockState
get "soundType"(): $SoundType
get "lightEmission"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCamoContent$$Type = ($FluidCamoContent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidCamoContent$$Original = $FluidCamoContent;}
declare module "xfacthd.framedblocks.common.data.property.PillarConnection" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $PillarConnection extends $Enum<($PillarConnection)> implements $StringRepresentable$$Interface {
static readonly "POST": $PillarConnection
static readonly "PILLAR": $PillarConnection
static readonly "NONE": $PillarConnection

public static "values"(): ($PillarConnection)[]
public static "valueOf"(arg0: StringJS): $PillarConnection
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarConnection$$Type = (("none") | ("post") | ("pillar"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PillarConnection$$Original = $PillarConnection;}
declare module "xfacthd.framedblocks.common.data.doubleblock.SolidityCheck" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$FramedDoubleBlockEntity$$Type} from "xfacthd.framedblocks.common.blockentity.doubled.FramedDoubleBlockEntity"
import {$Enum} from "java.lang.Enum"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"

export class $SolidityCheck extends $Enum<($SolidityCheck)> {
static readonly "SECOND": $SolidityCheck
static readonly "NONE": $SolidityCheck
static readonly "FIRST": $SolidityCheck
static readonly "BOTH": $SolidityCheck

public "isSolid"(arg0: $FramedDoubleBlockEntity$$Type): boolean
public "canSustainPlant"(arg0: $FramedDoubleBlockEntity$$Type, arg1: $BlockGetter$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): $TriState
public static "values"(): ($SolidityCheck)[]
public static "valueOf"(arg0: StringJS): $SolidityCheck
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidityCheck$$Type = (("none") | ("first") | ("second") | ("both"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolidityCheck$$Original = $SolidityCheck;}
