import { FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { ConfigurationOptions } from 'typesense/lib/Typesense/Configuration';

export type TypeSenseSyncOptions = Pick<ModuleMetadata, 'imports'> &
    Pick<FactoryProvider<ConfigurationOptions>, 'useFactory' | 'inject'>;
