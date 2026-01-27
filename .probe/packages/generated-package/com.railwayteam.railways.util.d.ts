declare module "com.railwayteam.railways.util.ShapeWrapper" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"

export class $ShapeWrapper {
constructor(arg0: $VoxelShape$$Type)
constructor(arg0: $VoxelShaper$$Type)

public static "wrapped"(arg0: $VoxelShaper$$Type): $ShapeWrapper
public static "wrapped"(arg0: $VoxelShape$$Type): $ShapeWrapper
public "get"(arg0: $Direction$$Type): $VoxelShape
public "get"(arg0: $Direction$Axis$$Type): $VoxelShape
public "get"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeWrapper$$Type = ($ShapeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapeWrapper$$Original = $ShapeWrapper;}
