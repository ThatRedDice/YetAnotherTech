declare module "com.buuz135.industrial.utils.apihandlers.plant.KelpPlantRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $KelpPlantRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getSeedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KelpPlantRecollectable$$Type = ($KelpPlantRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KelpPlantRecollectable$$Original = $KelpPlantRecollectable;}
declare module "com.buuz135.industrial.utils.apihandlers.straw.LavaStrawHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StrawHandlerBase} from "com.buuz135.industrial.utils.apihandlers.straw.StrawHandlerBase"

export class $LavaStrawHandler extends $StrawHandlerBase {
constructor()

public "onDrink"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Player$$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LavaStrawHandler$$Type = ($LavaStrawHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LavaStrawHandler$$Original = $LavaStrawHandler;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.DoubleTallPlantRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DoubleTallPlantRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getRecollectablesNames"(): $List<(StringJS)>
public "getSeedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
get "recollectablesNames"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleTallPlantRecollectable$$Type = ($DoubleTallPlantRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleTallPlantRecollectable$$Original = $DoubleTallPlantRecollectable;}
declare module "com.buuz135.industrial.utils.apihandlers.straw.WaterStrawHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StrawHandlerBase} from "com.buuz135.industrial.utils.apihandlers.straw.StrawHandlerBase"

export class $WaterStrawHandler extends $StrawHandlerBase {
constructor()

public "onDrink"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Player$$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterStrawHandler$$Type = ($WaterStrawHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaterStrawHandler$$Original = $WaterStrawHandler;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.ChorusFruitRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChorusFruitRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getRecollectablesNames"(): $List<(StringJS)>
get "recollectablesNames"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusFruitRecollectable$$Type = ($ChorusFruitRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChorusFruitRecollectable$$Original = $ChorusFruitRecollectable;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.TreeCache" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TreeCache {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)

public "getWoodCache"(): $Queue<($BlockPos)>
public "getLeavesCache"(): $Queue<($BlockPos)>
public "scanForTreeBlockSection"(): void
public "getHighestBlock"(arg0: $BlockPos$$Type): $BlockPos
public "chop"(arg0: $Queue$$Type<($BlockPos$$Type)>, arg1: boolean): $List<($ItemStack)>
get "woodCache"(): $Queue<($BlockPos)>
get "leavesCache"(): $Queue<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeCache$$Type = ($TreeCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TreeCache$$Original = $TreeCache;}
declare module "com.buuz135.industrial.utils.apihandlers.straw.PotionStrawHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StrawHandlerBase} from "com.buuz135.industrial.utils.apihandlers.straw.StrawHandlerBase"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export class $PotionStrawHandler extends $StrawHandlerBase {
constructor(arg0: $Supplier$$Type<($Fluid$$Type)>)

public "addPotion"(arg0: $Holder$$Type<($MobEffect)>, arg1: integer, arg2: integer): $PotionStrawHandler
public "addPotion"(arg0: $MobEffectInstance$$Type): $PotionStrawHandler
public "onDrink"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Player$$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionStrawHandler$$Type = ($PotionStrawHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionStrawHandler$$Original = $PotionStrawHandler;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.BlockNetherWartRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockNetherWartRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getRecollectablesNames"(): $List<(StringJS)>
get "recollectablesNames"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockNetherWartRecollectable$$Type = ($BlockNetherWartRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockNetherWartRecollectable$$Original = $BlockNetherWartRecollectable;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.BlockCropPlantRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCropPlantRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getRecollectablesNames"(): $List<(StringJS)>
get "recollectablesNames"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCropPlantRecollectable$$Type = ($BlockCropPlantRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCropPlantRecollectable$$Original = $BlockCropPlantRecollectable;}
declare module "com.buuz135.industrial.utils.apihandlers.straw.EssenceStrawHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StrawHandlerBase} from "com.buuz135.industrial.utils.apihandlers.straw.StrawHandlerBase"

export class $EssenceStrawHandler extends $StrawHandlerBase {
constructor()

public "onDrink"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Player$$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceStrawHandler$$Type = ($EssenceStrawHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EssenceStrawHandler$$Original = $EssenceStrawHandler;}
declare module "com.buuz135.industrial.utils.apihandlers.straw.StrawHandlerBase" {
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$StrawHandler} from "com.buuz135.industrial.api.straw.StrawHandler"
import {$Supplier$$Type} from "java.util.function.Supplier"

export class $StrawHandlerBase extends $StrawHandler {
constructor(arg0: $Supplier$$Type<($Fluid$$Type)>)

public "validFluid"(arg0: $Fluid$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrawHandlerBase$$Type = ($StrawHandlerBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StrawHandlerBase$$Original = $StrawHandlerBase;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.SweetBerriesPlantRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SweetBerriesPlantRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SweetBerriesPlantRecollectable$$Type = ($SweetBerriesPlantRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SweetBerriesPlantRecollectable$$Original = $SweetBerriesPlantRecollectable;}
declare module "com.buuz135.industrial.utils.apihandlers.straw.MilkStrawHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StrawHandlerBase} from "com.buuz135.industrial.utils.apihandlers.straw.StrawHandlerBase"

export class $MilkStrawHandler extends $StrawHandlerBase {
constructor()

public "onDrink"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Fluid$$Type, arg3: $Player$$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MilkStrawHandler$$Type = ($MilkStrawHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MilkStrawHandler$$Original = $MilkStrawHandler;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.BambooPlantRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BambooPlantRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getSeedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BambooPlantRecollectable$$Type = ($BambooPlantRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BambooPlantRecollectable$$Original = $BambooPlantRecollectable;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.PumpkinMelonPlantRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PumpkinMelonPlantRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getRecollectablesNames"(): $List<(StringJS)>
public "getSeedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
get "recollectablesNames"(): $List<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpkinMelonPlantRecollectable$$Type = ($PumpkinMelonPlantRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PumpkinMelonPlantRecollectable$$Original = $PumpkinMelonPlantRecollectable;}
declare module "com.buuz135.industrial.utils.apihandlers.plant.TreePlantRecollectable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$PlantRecollectable} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PlantRecollectable$Type} from "com.buuz135.industrial.api.plant.PlantRecollectable$Type"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TreePlantRecollectable extends $PlantRecollectable {
constructor()

public "canBeHarvested"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $List<($ItemStack)>
public "doHarvestOperation"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, ...arg3: (any)[]): $List<($ItemStack)>
public "shouldCheckNextPlant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getRecollectablesNames"(): $List<(StringJS)>
public "getRecollectableType"(): $PlantRecollectable$Type
get "recollectablesNames"(): $List<(StringJS)>
get "recollectableType"(): $PlantRecollectable$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreePlantRecollectable$$Type = ($TreePlantRecollectable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TreePlantRecollectable$$Original = $TreePlantRecollectable;}
