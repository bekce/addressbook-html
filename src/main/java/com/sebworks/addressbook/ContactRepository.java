package com.sebworks.addressbook;

import org.springframework.data.repository.CrudRepository;

/**
 * Created by seb on 12.08.2015.
 */
public interface ContactRepository extends CrudRepository<Contact, String> {
}
