declare module "me.desht.pneumaticcraft.client.util.ProgressingLine" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vector3f$$Type} from "org.joml.Vector3f"

export class $ProgressingLine {
 "endZ": float
 "endY": float
 "endX": float
readonly "startZ": float
readonly "startY": float
readonly "startX": float

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type)
constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)

public "incProgressByDistance"(arg0: float): boolean
public "incProgress"(arg0: float): boolean
public "getProgress"(): float
public "setProgress"(arg0: float): $ProgressingLine
get "progress"(): float
set "progress"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressingLine$$Type = ($ProgressingLine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressingLine$$Original = $ProgressingLine;}
declare module "me.desht.pneumaticcraft.client.ColorHandlers$ITintableItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ColorHandlers$ITintableItem$$Interface {

(arg0: $ItemStack, arg1: integer): integer
}

export class $ColorHandlers$ITintableItem implements $ColorHandlers$ITintableItem$$Interface {
 "getTintColor"(arg0: $ItemStack$$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorHandlers$ITintableItem$$Type = ((arg0: $ItemStack, arg1: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorHandlers$ITintableItem$$Original = $ColorHandlers$ITintableItem;}
declare module "me.desht.pneumaticcraft.client.render.fluid.TankRenderInfo" {
import {$BitSet} from "java.util.BitSet"
import {$IFluidTank, $IFluidTank$$Type} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $TankRenderInfo {
constructor(arg0: $FluidStack$$Type, arg1: integer, arg2: $AABB$$Type, ...arg3: ($Direction$$Type)[])
constructor(arg0: $IFluidTank$$Type, arg1: $AABB$$Type, ...arg2: ($Direction$$Type)[])

public "getFaces"(): $BitSet
public "without"(arg0: $Direction$$Type): $TankRenderInfo
public "getBounds"(): $AABB
public "shouldRender"(arg0: $Direction$$Type): boolean
public "getTank"(): $IFluidTank
get "faces"(): $BitSet
get "bounds"(): $AABB
get "tank"(): $IFluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankRenderInfo$$Type = ($TankRenderInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankRenderInfo$$Original = $TankRenderInfo;}
declare module "me.desht.pneumaticcraft.client.ColorHandlers$ITintableBlock" {
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ColorHandlers$ITintableBlock$$Interface {

(arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: integer): integer
}

export class $ColorHandlers$ITintableBlock implements $ColorHandlers$ITintableBlock$$Interface {
 "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorHandlers$ITintableBlock$$Type = ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorHandlers$ITintableBlock$$Original = $ColorHandlers$ITintableBlock;}
declare module "me.desht.pneumaticcraft.client.sound.MovingSounds$Sound" {
import {$Enum} from "java.lang.Enum"

export class $MovingSounds$Sound extends $Enum<($MovingSounds$Sound)> {
static readonly "JET_BOOTS": $MovingSounds$Sound
static readonly "MINIGUN": $MovingSounds$Sound
static readonly "AIR_LEAK": $MovingSounds$Sound
static readonly "JACKHAMMER": $MovingSounds$Sound
static readonly "ELEVATOR": $MovingSounds$Sound

public static "values"(): ($MovingSounds$Sound)[]
public static "valueOf"(arg0: StringJS): $MovingSounds$Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovingSounds$Sound$$Type = (("jet_boots") | ("minigun") | ("elevator") | ("air_leak") | ("jackhammer"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MovingSounds$Sound$$Original = $MovingSounds$Sound;}
declare module "me.desht.pneumaticcraft.client.render.fluid.IFluidItemRenderInfoProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$TankRenderInfo, $TankRenderInfo$$Type} from "me.desht.pneumaticcraft.client.render.fluid.TankRenderInfo"

export interface $IFluidItemRenderInfoProvider$$Interface {

(arg0: $ItemStack): $List$$Type<($TankRenderInfo$$Type)>
}

export class $IFluidItemRenderInfoProvider implements $IFluidItemRenderInfoProvider$$Interface {
 "getTanksToRender"(arg0: $ItemStack$$Type): $List<($TankRenderInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidItemRenderInfoProvider$$Type = ((arg0: $ItemStack) => $List$$Type<($TankRenderInfo$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFluidItemRenderInfoProvider$$Original = $IFluidItemRenderInfoProvider;}
declare module "me.desht.pneumaticcraft.client.ColorHandlers$IHeatTintable" {
import {$ColorHandlers$ITintableBlock$$Interface} from "me.desht.pneumaticcraft.client.ColorHandlers$ITintableBlock"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ColorHandlers$IHeatTintable$$Interface extends $ColorHandlers$ITintableBlock$$Interface {
}

export class $ColorHandlers$IHeatTintable implements $ColorHandlers$IHeatTintable$$Interface {
 "getTintColor"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorHandlers$IHeatTintable$$Type = ($ColorHandlers$IHeatTintable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorHandlers$IHeatTintable$$Original = $ColorHandlers$IHeatTintable;}
