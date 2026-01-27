declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sphere.SphereDepositConfigModel" {
import {$ValidationManager} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$SampleBlockDefinitionModel, $SampleBlockDefinitionModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel"
import {$CommonBlockDefinitionModel, $CommonBlockDefinitionModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel"

export class $SphereDepositConfigModel {
readonly "maxYLevel": integer
static readonly "CODEC": $Codec<($SphereDepositConfigModel)>
readonly "chance": integer
readonly "sampleBlocks": $List<($SampleBlockDefinitionModel)>
readonly "blocks": $List<($CommonBlockDefinitionModel)>
readonly "minYLevel": integer
readonly "fillerTypes": $List<(StringJS)>
readonly "placement": StringJS
readonly "generateSamples": boolean
readonly "radius": integer
static readonly "VALIDATION_MANAGER": $ValidationManager
readonly "rarity": StringJS

constructor(arg0: $List$$Type<($CommonBlockDefinitionModel$$Type)>, arg1: $List$$Type<(StringJS)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: StringJS, arg7: StringJS, arg8: boolean, arg9: $List$$Type<($SampleBlockDefinitionModel$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SphereDepositConfigModel$$Type = ($SphereDepositConfigModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SphereDepositConfigModel$$Original = $SphereDepositConfigModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.vanilla.VanillaDepositConfigModel" {
import {$ValidationManager} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"

export class $VanillaDepositConfigModel {
readonly "maxYLevel": integer
static readonly "CODEC": $Codec<($VanillaDepositConfigModel)>
readonly "chance": integer
readonly "material": StringJS
readonly "size": integer
readonly "minYLevel": integer
readonly "block": StringJS
readonly "fillerTypes": $List<(StringJS)>
readonly "placement": StringJS
static readonly "VALIDATION_MANAGER": $ValidationManager
readonly "rarity": StringJS

constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<(StringJS)>, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: StringJS, arg8: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaDepositConfigModel$$Type = ($VanillaDepositConfigModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaDepositConfigModel$$Original = $VanillaDepositConfigModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonDepositModelBase" {
import {$List, $List$$Type} from "java.util.List"

export class $CommonDepositModelBase {
constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<(StringJS)>, arg3: StringJS)

public "getBiomes"(): $List<(StringJS)>
public "getDimension"(): StringJS
public "getName"(): StringJS
public "getType"(): StringJS
get "biomes"(): $List<(StringJS)>
get "dimension"(): StringJS
get "name"(): StringJS
get "type"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonDepositModelBase$$Type = ($CommonDepositModelBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonDepositModelBase$$Original = $CommonDepositModelBase;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.dike.DikeDepositConfigModel" {
import {$ValidationManager} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$SampleBlockDefinitionModel, $SampleBlockDefinitionModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel"
import {$CommonBlockDefinitionModel, $CommonBlockDefinitionModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel"

export class $DikeDepositConfigModel {
readonly "maxYLevel": integer
static readonly "CODEC": $Codec<($DikeDepositConfigModel)>
readonly "chance": integer
readonly "size": integer
readonly "sampleBlocks": $List<($SampleBlockDefinitionModel)>
readonly "blocks": $List<($CommonBlockDefinitionModel)>
readonly "minYLevel": integer
readonly "fillerTypes": $List<(StringJS)>
readonly "placement": StringJS
readonly "generateSamples": boolean
static readonly "VALIDATION_MANAGER": $ValidationManager
readonly "rarity": StringJS

constructor(arg0: $List$$Type<($CommonBlockDefinitionModel$$Type)>, arg1: $List$$Type<(StringJS)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: StringJS, arg7: StringJS, arg8: boolean, arg9: $List$$Type<($SampleBlockDefinitionModel$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DikeDepositConfigModel$$Type = ($DikeDepositConfigModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DikeDepositConfigModel$$Original = $DikeDepositConfigModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.geode.GeodeDepositModel" {
import {$GeodeDepositConfigModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.geode.GeodeDepositConfigModel"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$SampleBlockDefinitionModel} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel"
import {$CommonDepositModelBase} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonDepositModelBase"
import {$CommonBlockDefinitionModel} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel"

export class $GeodeDepositModel extends $CommonDepositModelBase {
static readonly "CODEC": $Codec<($GeodeDepositModel)>

constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<(StringJS)>, arg3: StringJS, arg4: $GeodeDepositConfigModel$$Type)

public "getPlacement"(): StringJS
public "getRarity"(): StringJS
public "getChance"(): integer
public "getFillerTypes"(): $List<(StringJS)>
public "getMaxYLevel"(): integer
public "getMinYLevel"(): integer
public "getSampleBlocks"(): $List<($SampleBlockDefinitionModel)>
public "getInnerBlocks"(): $List<($CommonBlockDefinitionModel)>
public "getFillBlocks"(): $List<($CommonBlockDefinitionModel)>
public "getInnerShellBlocks"(): $List<($CommonBlockDefinitionModel)>
public "getOuterShellBlocks"(): $List<($CommonBlockDefinitionModel)>
public "hasSamples"(): boolean
public "getPlacementChance"(): integer
public "getClusters"(): $List<(StringJS)>
public "getCrackChance"(): double
public "getType"(): StringJS
get "placement"(): StringJS
get "rarity"(): StringJS
get "chance"(): integer
get "fillerTypes"(): $List<(StringJS)>
get "maxYLevel"(): integer
get "minYLevel"(): integer
get "sampleBlocks"(): $List<($SampleBlockDefinitionModel)>
get "innerBlocks"(): $List<($CommonBlockDefinitionModel)>
get "fillBlocks"(): $List<($CommonBlockDefinitionModel)>
get "innerShellBlocks"(): $List<($CommonBlockDefinitionModel)>
get "outerShellBlocks"(): $List<($CommonBlockDefinitionModel)>
get "placementChance"(): integer
get "clusters"(): $List<(StringJS)>
get "crackChance"(): double
get "type"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeodeDepositModel$$Type = ($GeodeDepositModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeodeDepositModel$$Original = $GeodeDepositModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.vanilla.VanillaDepositModel" {
import {$VanillaDepositConfigModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.vanilla.VanillaDepositConfigModel"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$CommonDepositModelBase} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonDepositModelBase"

export class $VanillaDepositModel extends $CommonDepositModelBase {
static readonly "CODEC": $Codec<($VanillaDepositModel)>

constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<(StringJS)>, arg3: StringJS, arg4: $VanillaDepositConfigModel$$Type)

public "getPlacement"(): StringJS
public "getRarity"(): StringJS
public "getChance"(): integer
public "getFillerTypes"(): $List<(StringJS)>
public "getMaxYLevel"(): integer
public "getMinYLevel"(): integer
public "getPlacementChance"(): integer
public "getBlock"(): StringJS
public "getType"(): StringJS
public "getSize"(): integer
public "getMaterial"(): StringJS
get "placement"(): StringJS
get "rarity"(): StringJS
get "chance"(): integer
get "fillerTypes"(): $List<(StringJS)>
get "maxYLevel"(): integer
get "minYLevel"(): integer
get "placementChance"(): integer
get "block"(): StringJS
get "type"(): StringJS
get "size"(): integer
get "material"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaDepositModel$$Type = ($VanillaDepositModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VanillaDepositModel$$Original = $VanillaDepositModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel" {
import {$ValidationManager} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager"
import {$Codec} from "com.mojang.serialization.Codec"

export class $SampleBlockDefinitionModel {
static readonly "CODEC": $Codec<($SampleBlockDefinitionModel)>
static readonly "VALIDATION_MANAGER": $ValidationManager

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: StringJS)

public "getStrata"(): StringJS
public "getTag"(): StringJS
public "getBlock"(): StringJS
public "getWeight"(): integer
public "getMaterial"(): StringJS
get "strata"(): StringJS
get "tag"(): StringJS
get "block"(): StringJS
get "weight"(): integer
get "material"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleBlockDefinitionModel$$Type = ($SampleBlockDefinitionModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SampleBlockDefinitionModel$$Original = $SampleBlockDefinitionModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.dense.DenseDepositModel" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$DenseDepositConfigModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.dense.DenseDepositConfigModel"
import {$List, $List$$Type} from "java.util.List"
import {$SampleBlockDefinitionModel} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel"
import {$CommonDepositModelBase} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonDepositModelBase"
import {$CommonBlockDefinitionModel} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel"

export class $DenseDepositModel extends $CommonDepositModelBase {
static readonly "CODEC": $Codec<($DenseDepositModel)>

constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<(StringJS)>, arg3: StringJS, arg4: $DenseDepositConfigModel$$Type)

public "getPlacement"(): StringJS
public "getRarity"(): StringJS
public "getChance"(): integer
public "getFillerTypes"(): $List<(StringJS)>
public "getMaxYLevel"(): integer
public "getMinYLevel"(): integer
public "getSampleBlocks"(): $List<($SampleBlockDefinitionModel)>
public "hasSamples"(): boolean
public "getPlacementChance"(): integer
public "getType"(): StringJS
public "getSize"(): integer
public "getBlocks"(): $List<($CommonBlockDefinitionModel)>
get "placement"(): StringJS
get "rarity"(): StringJS
get "chance"(): integer
get "fillerTypes"(): $List<(StringJS)>
get "maxYLevel"(): integer
get "minYLevel"(): integer
get "sampleBlocks"(): $List<($SampleBlockDefinitionModel)>
get "placementChance"(): integer
get "type"(): StringJS
get "size"(): integer
get "blocks"(): $List<($CommonBlockDefinitionModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenseDepositModel$$Type = ($DenseDepositModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DenseDepositModel$$Original = $DenseDepositModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.dense.DenseDepositConfigModel" {
import {$ValidationManager} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$SampleBlockDefinitionModel, $SampleBlockDefinitionModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel"
import {$CommonBlockDefinitionModel, $CommonBlockDefinitionModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel"

export class $DenseDepositConfigModel {
readonly "maxYLevel": integer
static readonly "CODEC": $Codec<($DenseDepositConfigModel)>
readonly "chance": integer
readonly "size": integer
readonly "sampleBlocks": $List<($SampleBlockDefinitionModel)>
readonly "blocks": $List<($CommonBlockDefinitionModel)>
readonly "minYLevel": integer
readonly "fillerTypes": $List<(StringJS)>
readonly "placement": StringJS
readonly "generateSamples": boolean
static readonly "VALIDATION_MANAGER": $ValidationManager
readonly "rarity": StringJS

constructor(arg0: $List$$Type<($CommonBlockDefinitionModel$$Type)>, arg1: $List$$Type<(StringJS)>, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: StringJS, arg7: StringJS, arg8: boolean, arg9: $List$$Type<($SampleBlockDefinitionModel$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenseDepositConfigModel$$Type = ($DenseDepositConfigModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DenseDepositConfigModel$$Original = $DenseDepositConfigModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sphere.SphereDepositModel" {
import {$SphereDepositConfigModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sphere.SphereDepositConfigModel"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$SampleBlockDefinitionModel} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel"
import {$CommonDepositModelBase} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonDepositModelBase"
import {$CommonBlockDefinitionModel} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel"

export class $SphereDepositModel extends $CommonDepositModelBase {
static readonly "CODEC": $Codec<($SphereDepositModel)>

constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<(StringJS)>, arg3: StringJS, arg4: $SphereDepositConfigModel$$Type)

public "getPlacement"(): StringJS
public "getRarity"(): StringJS
public "getRadius"(): integer
public "getChance"(): integer
public "getFillerTypes"(): $List<(StringJS)>
public "getMaxYLevel"(): integer
public "getMinYLevel"(): integer
public "getSampleBlocks"(): $List<($SampleBlockDefinitionModel)>
public "hasSamples"(): boolean
public "getPlacementChance"(): integer
public "getType"(): StringJS
public "getBlocks"(): $List<($CommonBlockDefinitionModel)>
get "placement"(): StringJS
get "rarity"(): StringJS
get "radius"(): integer
get "chance"(): integer
get "fillerTypes"(): $List<(StringJS)>
get "maxYLevel"(): integer
get "minYLevel"(): integer
get "sampleBlocks"(): $List<($SampleBlockDefinitionModel)>
get "placementChance"(): integer
get "type"(): StringJS
get "blocks"(): $List<($CommonBlockDefinitionModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SphereDepositModel$$Type = ($SphereDepositModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SphereDepositModel$$Original = $SphereDepositModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.dike.DikeDepositModel" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$SampleBlockDefinitionModel} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel"
import {$CommonDepositModelBase} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonDepositModelBase"
import {$CommonBlockDefinitionModel} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel"
import {$DikeDepositConfigModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.dike.DikeDepositConfigModel"

export class $DikeDepositModel extends $CommonDepositModelBase {
static readonly "CODEC": $Codec<($DikeDepositModel)>

constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<(StringJS)>, arg3: StringJS, arg4: $DikeDepositConfigModel$$Type)

public "getPlacement"(): StringJS
public "getRarity"(): StringJS
public "getChance"(): integer
public "getFillerTypes"(): $List<(StringJS)>
public "getMaxYLevel"(): integer
public "getMinYLevel"(): integer
public "getSampleBlocks"(): $List<($SampleBlockDefinitionModel)>
public "hasSamples"(): boolean
public "getPlacementChance"(): integer
public "getType"(): StringJS
public "getSize"(): integer
public "getBlocks"(): $List<($CommonBlockDefinitionModel)>
get "placement"(): StringJS
get "rarity"(): StringJS
get "chance"(): integer
get "fillerTypes"(): $List<(StringJS)>
get "maxYLevel"(): integer
get "minYLevel"(): integer
get "sampleBlocks"(): $List<($SampleBlockDefinitionModel)>
get "placementChance"(): integer
get "type"(): StringJS
get "size"(): integer
get "blocks"(): $List<($CommonBlockDefinitionModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DikeDepositModel$$Type = ($DikeDepositModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DikeDepositModel$$Original = $DikeDepositModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel" {
import {$ValidationManager} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager"
import {$Codec} from "com.mojang.serialization.Codec"

export class $CommonBlockDefinitionModel {
static readonly "CODEC": $Codec<($CommonBlockDefinitionModel)>
static readonly "VALIDATION_MANAGER": $ValidationManager

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer)

public "getTag"(): StringJS
public "getBlock"(): StringJS
public "getMax"(): integer
public "getMin"(): integer
public "getWeight"(): integer
public "getMaterial"(): StringJS
get "tag"(): StringJS
get "block"(): StringJS
get "max"(): integer
get "min"(): integer
get "weight"(): integer
get "material"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonBlockDefinitionModel$$Type = ($CommonBlockDefinitionModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommonBlockDefinitionModel$$Original = $CommonBlockDefinitionModel;}
declare module "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.geode.GeodeDepositConfigModel" {
import {$ValidationManager} from "com.ridanisaurus.emendatusenigmatica.api.validation.ValidationManager"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$SampleBlockDefinitionModel, $SampleBlockDefinitionModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.sample.SampleBlockDefinitionModel"
import {$CommonBlockDefinitionModel, $CommonBlockDefinitionModel$$Type} from "com.ridanisaurus.emendatusenigmatica.plugin.model.deposit.common.CommonBlockDefinitionModel"

export class $GeodeDepositConfigModel {
static readonly "CODEC": $Codec<($GeodeDepositConfigModel)>
readonly "chance": integer
readonly "outerShellBlocks": $List<($CommonBlockDefinitionModel)>
readonly "crackChance": double
readonly "maxYLevel": integer
readonly "fillBlocks": $List<($CommonBlockDefinitionModel)>
readonly "sampleBlocks": $List<($SampleBlockDefinitionModel)>
readonly "innerShellBlocks": $List<($CommonBlockDefinitionModel)>
readonly "minYLevel": integer
readonly "innerBlocks": $List<($CommonBlockDefinitionModel)>
readonly "fillerTypes": $List<(StringJS)>
readonly "placement": StringJS
readonly "generateSamples": boolean
static readonly "VALIDATION_MANAGER": $ValidationManager
readonly "clusters": $List<(StringJS)>
readonly "rarity": StringJS

constructor(arg0: $List$$Type<($CommonBlockDefinitionModel$$Type)>, arg1: $List$$Type<($CommonBlockDefinitionModel$$Type)>, arg2: $List$$Type<($CommonBlockDefinitionModel$$Type)>, arg3: $List$$Type<($CommonBlockDefinitionModel$$Type)>, arg4: $List$$Type<(StringJS)>, arg5: $List$$Type<(StringJS)>, arg6: integer, arg7: double, arg8: integer, arg9: integer, arg10: StringJS, arg11: StringJS, arg12: boolean, arg13: $List$$Type<($SampleBlockDefinitionModel$$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeodeDepositConfigModel$$Type = ($GeodeDepositConfigModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeodeDepositConfigModel$$Original = $GeodeDepositConfigModel;}
